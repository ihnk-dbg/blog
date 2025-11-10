import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/PhilosophyMode.css'

function PhilosophyMode({ children }) {
  const [isActive, setIsActive] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (isActive) {
      document.documentElement.setAttribute('data-philosophy-mode', 'true')
      document.body.style.overflow = 'hidden'
    } else {
      document.documentElement.removeAttribute('data-philosophy-mode')
      document.body.style.overflow = ''
    }

    return () => {
      document.documentElement.removeAttribute('data-philosophy-mode')
      document.body.style.overflow = ''
    }
  }, [isActive])

  const togglePhilosophyMode = () => {
    setIsActive(!isActive)
  }

  // Only show toggle on blog post pages
  const isBlogPost = location.pathname.includes('/post/')

  if (!isBlogPost) return null

  return (
    <>
      <button
        className="philosophy-mode-toggle"
        onClick={togglePhilosophyMode}
        aria-label="Toggle Philosophy Mode"
        title="Minimal reading mode"
      >
        {isActive ? '☀️' : '🧘'}
      </button>
      {isActive && (
        <div className="philosophy-mode-overlay active">
          <div className="philosophy-content">
            <button className="philosophy-close" onClick={togglePhilosophyMode}>
              ✕
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export default PhilosophyMode

