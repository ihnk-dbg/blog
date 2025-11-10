import { useTheme } from '../contexts/ThemeContext'
import '../styles/ThemeToggle.css'

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      <span className="theme-icon">
        {isDark ? '☀️' : '🌙'}
      </span>
    </button>
  )
}

export default ThemeToggle

