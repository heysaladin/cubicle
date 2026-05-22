'use client'
import { useEffect, useState } from 'react'

export function useScrollDirection() {
  const [scrolled, setScrolled] = useState(false)
  const [direction, setDirection] = useState<'up' | 'down'>('down')
  const [lastY, setLastY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 10)
      setDirection(currentY > lastY ? 'down' : 'up')
      setLastY(currentY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastY])

  return { scrolled, direction }
}
