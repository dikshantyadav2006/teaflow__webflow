import { useState, useEffect } from 'react'

export const useScrollDetection = (delay = 1000) => {
  const [isScrolling, setIsScrolling] = useState(false)
  const [showOnScrollStop, setShowOnScrollStop] = useState(true) // Start with true
  const [scrollDirection, setScrollDirection] = useState('up')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let scrollTimer = null
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down')
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up')
      }

      lastScrollY = currentScrollY
      setScrollY(currentScrollY)

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

    // Initial call to set scroll position
    setScrollY(window.scrollY)

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimer) {
        clearTimeout(scrollTimer)
      }
    }
  }, [delay])

  return {
    isScrolling,
    showOnScrollStop,
    scrollDirection,
    scrollY
  }
}

export default useScrollDetection
