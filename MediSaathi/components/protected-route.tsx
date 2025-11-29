'use client'

import { useAuth } from '@/contexts/auth-context'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'

interface ProtectedRouteProps {
  children: React.ReactNode
  allowedUserTypes?: ('patient' | 'doctor' | 'hospital')[]
}

export default function ProtectedRoute({ children, allowedUserTypes }: ProtectedRouteProps) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/auth/signin')
        return
      }

      if (allowedUserTypes && !allowedUserTypes.includes(user.user_type)) {
        router.push(`/${user.user_type}/dashboard`)
        return
      }
    }
  }, [user, loading, router, allowedUserTypes])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-64">
          <CardContent className="flex items-center justify-center p-6">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-2">Loading...</span>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!user) {
    return null
  }

  if (allowedUserTypes && !allowedUserTypes.includes(user.user_type)) {
    return null
  }

  return <>{children}</>
}