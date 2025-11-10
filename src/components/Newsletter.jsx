import { useState } from 'react'
import { showToast } from './Toast'
import '../styles/Newsletter.css'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setEmail('')
      showToast('Thank you for subscribing! Check your email for confirmation.', 'success')
    }, 1000)
  }

  return (
    <div className="newsletter">
      <div className="newsletter-content">
        <h3 className="newsletter-title">📬 Weekly Digest</h3>
        <p className="newsletter-description">
          Get the latest posts delivered to your inbox every week. No spam, unsubscribe anytime.
        </p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
            className="newsletter-input"
            required
            disabled={isSubmitting}
          />
          <button
            type="submit"
            className="newsletter-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        <p className="newsletter-privacy">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  )
}

export default Newsletter

