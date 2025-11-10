import { useState } from 'react'
import { showToast } from './Toast'
import '../styles/ShareButton.css'

function ShareButton({ title, url, variant = 'default' }) {
  const [isOpen, setIsOpen] = useState(false)

  // Get the base URL safely
  const getBaseUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.origin
    }
    return '' // Fallback for SSR
  }

  const baseUrl = getBaseUrl()
  const fullUrl = baseUrl + url

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(fullUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
    copy: url,
  }

  const handleShare = async (platform) => {
    if (platform === 'copy') {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(fullUrl)
          showToast('Link copied to clipboard!', 'success')
        } else {
          // Fallback for browsers that don't support clipboard API
          const textArea = document.createElement('textarea')
          textArea.value = fullUrl
          document.body.appendChild(textArea)
          textArea.select()
          document.execCommand('copy')
          document.body.removeChild(textArea)
          showToast('Link copied to clipboard!', 'success')
        }
        setIsOpen(false)
      } catch (error) {
        console.error('Failed to copy link:', error)
        showToast('Failed to copy link', 'error')
      }
    } else {
      if (typeof window !== 'undefined') {
        window.open(shareLinks[platform], '_blank', 'width=600,height=400')
      }
      setIsOpen(false)
    }
  }

  if (variant === 'icon') {
    return (
      <button
        className="share-button-icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Share"
      >
        🔗
        {isOpen && (
          <div className="share-dropdown">
            <button onClick={() => handleShare('twitter')}>Twitter</button>
            <button onClick={() => handleShare('facebook')}>Facebook</button>
            <button onClick={() => handleShare('linkedin')}>LinkedIn</button>
            <button onClick={() => handleShare('copy')}>Copy Link</button>
          </div>
        )}
      </button>
    )
  }

  return (
    <div className="share-button-group">
      <button
        className="share-button-trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        Share
      </button>
      {isOpen && (
        <div className="share-dropdown">
          <button onClick={() => handleShare('twitter')}>Twitter</button>
          <button onClick={() => handleShare('facebook')}>Facebook</button>
          <button onClick={() => handleShare('linkedin')}>LinkedIn</button>
          <button onClick={() => handleShare('copy')}>Copy Link</button>
        </div>
      )}
    </div>
  )
}

export default ShareButton

