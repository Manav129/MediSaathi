'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

interface User {
  id: string
  email: string
  full_name: string
  user_type: 'patient' | 'doctor' | 'admin'
  avatar_url?: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: () => void
  logout: () => void
  updateUserType: (userType: 'patient' | 'doctor') => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return

    if (session?.user?.email) {
      // Fetch user data from our database
      fetchUserData(session.user.email)
    } else {
      setUser(null)
      setLoading(false)
    }
  }, [session, status])

  const fetchUserData = async (email: string) => {
    try {
      console.log(email)
      const { data: userData, error } = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .single()

      if (error) {
        console.log(userData)
        console.error('Error fetching user data:', error)
        console.log("Error Here")
        setUser(null)
      } else if (userData) {
        setUser({
          id: userData.id,
          email: userData.email,
          full_name: userData.full_name,
          user_type: userData.user_type,
          avatar_url: userData.avatar_url
        })
      }
    } catch (error) {
      console.error('Error in fetchUserData:', error)
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  const login = () => {
    signIn('google', { callbackUrl: '/dashboard' })
  }

  const logout = async () => {
    await signOut({ callbackUrl: '/login' })
    setUser(null)
  }

  const updateUserType = async (userType: 'patient' | 'doctor') => {
    if (!user) return

    try {
      const { error } = await supabase
        .from('users')
        .update({ 
          user_type: userType,
          updated_at: new Date().toISOString()
        })
        .eq('id', user.id)

      if (error) {
        console.error('Error updating user type:', error)
        throw error
      }

      // Update local state
      setUser(prev => prev ? { ...prev, user_type: userType } : null)
      
      // Redirect to dashboard after updating user type
      router.push('/dashboard')
    } catch (error) {
      console.error('Error in updateUserType:', error)
      throw error
    }
  }

  const value = {
    user,
    loading,
    login,
    logout,
    updateUserType
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}