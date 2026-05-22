'use client'
import { useLenis } from '@/lib/hooks/useLenis'

interface LenisProviderProps {
  children: React.ReactNode
}

export default function LenisProvider({ children }: LenisProviderProps) {
  useLenis()
  return <>{children}</>
}
