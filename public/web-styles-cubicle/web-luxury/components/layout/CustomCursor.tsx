'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const bubbleRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>()

  useEffect(() => {
    const hasHover = window.matchMedia('(hover: hover) and (min-width: 1025px)').matches
    const cursor = cursorRef.current
    const bubble = bubbleRef.current
    if (!cursor || !bubble) return

    if (hasHover) {
      cursor.dataset.cursorInit = 'true'
    }

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
    }

    const onEnterCard = () => {
      if (bubble) bubble.dataset.cursorBubble = 'active'
    }
    const onLeaveCard = () => {
      if (bubble) bubble.dataset.cursorBubble = ''
    }

    const animate = () => {
      if (cursor) {
        cursor.style.left = `${posRef.current.x}px`
        cursor.style.top = `${posRef.current.y}px`
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    document.addEventListener('mousemove', onMove, { passive: true })

    const attachToCards = () => {
      const cards = document.querySelectorAll(
        '.single-stay-card, .single-packages-card, .single-discover-card, [data-cursor="view"]'
      )
      cards.forEach((card) => {
        card.addEventListener('mouseenter', onEnterCard)
        card.addEventListener('mouseleave', onLeaveCard)
      })
    }

    const observer = new MutationObserver(attachToCards)
    observer.observe(document.body, { childList: true, subtree: true })
    attachToCards()

    return () => {
      document.removeEventListener('mousemove', onMove)
      observer.disconnect()
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div ref={cursorRef} className="custom-cursor" aria-hidden="true" style={{ position: 'fixed', pointerEvents: 'none' }}>
      <div ref={bubbleRef} className="cursor-bubble">
        <div className="cursor-before"></div>
        <span className="cursor-text">View</span>
      </div>
    </div>
  )
}
