import { useState, useEffect } from 'react'

export const useScrollDetection = (delay = 1000) => {
  const [isScrolling, setIsScrolling] = useState(false)
  const [showOnScrollStop, setShowOnScrollStop] = useState(false)
  const [scrollDirection, setScrollDirection] = useState('up')
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    let scrollTimer = null

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down')
      } else {
        setScrollDirection('up')
      }
      setLastScrollY(currentScrollY)

      // Set scrolling state
      setIsScrolling(true)
      setShowOnScrollStop(false)

      // Clear existing timer
      if (scrollTimer) {
        clearTimeout(scrollTimer)
      }

      // Set new timer to detect when scrolling stops
      scrollTimer = setTimeout(() => {
        setIsScrolling(false)
        setShowOnScrollStop(true)
      }, delay)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimer) {
        clearTimeout(scrollTimer)
      }
    }
  }, [delay, lastScrollY])

  return {
    isScrolling,
    showOnScrollStop,
    scrollDirection,
    scrollY: lastScrollY
  }
}

export default useScrollDetection
