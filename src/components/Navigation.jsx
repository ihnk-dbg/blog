import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import Logo from './Logo'
import '../styles/Navigation.css'

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <nav className="navigation">
        <div className="nav-container">
          <Logo size="medium" showText={true} />
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          <div className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul className="nav-links">
              <li>
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              </li>
              <li>
                <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
              </li>
              <li>
                <Link to="/archive" onClick={() => setIsMobileMenuOpen(false)}>Archive</Link>
              </li>
              <li>
                <Link to="/projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
              </li>
              <li>
                <Link to="/library" onClick={() => setIsMobileMenuOpen(false)}>Library</Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              </li>
              <li className="nav-theme-toggle">
                <ThemeToggle />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation

