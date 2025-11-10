import '../styles/SocialShare.css'

function SocialShare({ title, url }) {
  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(window.location.origin + url)

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  }

  const handleShare = (platform) => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400')
  }

  return (
    <div className="social-share">
      <span className="share-label">Share:</span>
      <button
        className="share-btn twitter"
        onClick={() => handleShare('twitter')}
        aria-label="Share on Twitter"
      >
        🐦 Twitter
      </button>
      <button
        className="share-btn facebook"
        onClick={() => handleShare('facebook')}
        aria-label="Share on Facebook"
      >
        📘 Facebook
      </button>
      <button
        className="share-btn linkedin"
        onClick={() => handleShare('linkedin')}
        aria-label="Share on LinkedIn"
      >
        💼 LinkedIn
      </button>
    </div>
  )
}

export default SocialShare

