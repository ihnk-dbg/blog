import '../styles/Avatar.css'

function Avatar({ name, size = 'medium' }) {
  // Generate initials from name
  const getInitials = (name) => {
    if (!name) return 'IDJ'
    const parts = name.trim().split(' ')
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
    }
    if (name.length >= 2) {
      return name.substring(0, 2).toUpperCase()
    }
    return name.toUpperCase()
  }

  const initials = getInitials(name)

  return (
    <div className={`avatar avatar-${size}`}>
      <div className="avatar-inner">
        <span className="avatar-text">{initials}</span>
      </div>
    </div>
  )
}

export default Avatar
