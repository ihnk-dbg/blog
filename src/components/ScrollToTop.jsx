import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll to top immediately when route changes
    window.scrollTo(0, 0)
    // Also use scrollTo with instant behavior as fallback
    if (window.scrollTo) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      })
    } else {
      // Fallback for older browsers
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }
  }, [pathname])

  // Also scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return null
}

export default ScrollToTop

