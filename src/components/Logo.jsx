import { Link } from 'react-router-dom'
import '../styles/Logo.css'

function Logo({ size = 'medium', showText = true }) {
  return (
    <Link to="/" className={`logo logo-${size}`} aria-label="Ian's Digital Journal">
      <div className="logo-icon-container">
        <span className="logo-icon">IDJ</span>
      </div>
      {showText && (
        <span className="logo-text">
          <span className="logo-text-main">Ian's Digital Journal</span>
          <span className="logo-text-sub">Where logic meets meaning</span>
        </span>
      )}
    </Link>
  )
}

export default Logo

