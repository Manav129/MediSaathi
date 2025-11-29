import NextAuth, { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      userId?: string
      userType?: 'patient' | 'doctor' | 'hospital'
      fullName?: string
    } & DefaultSession['user']
  }

  interface User {
    userType?: 'patient' | 'doctor' | 'hospital'
    userId?: string
    fullName?: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    userId?: string
    userType?: 'patient' | 'doctor' | 'hospital'
  }
}