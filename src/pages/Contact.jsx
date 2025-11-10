import { useState } from 'react'
import SEO from '../components/SEO'
import { siteConfig } from '../data/siteData'
import { authors } from '../data/posts'
import ScrollReveal from '../components/ScrollReveal'
import '../styles/Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1000)
  }

  // Get first author's social links as default
  const author = Object.values(authors)[0] || {}

  return (
    <div className="contact-page">
      <SEO
        title="Contact"
        description="Get in touch - let's connect and discuss code, philosophy, or collaboration."
      />
      
      <ScrollReveal>
        <header className="contact-header">
          <h1>Contact</h1>
          <p className="contact-subtitle">
            Let's connect and discuss code, philosophy, or collaboration
          </p>
        </header>
      </ScrollReveal>

      <div className="contact-content">
        <ScrollReveal delay={100}>
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              Whether you want to discuss a project, share thoughts on a post,
              or just say hello, I'd love to hear from you.
            </p>
            
            {author.social && (
              <div className="social-links">
                <h3>Find me on</h3>
                <div className="social-buttons">
                  {author.social.twitter && (
                    <a
                      href={author.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-button"
                    >
                      Twitter
                    </a>
                  )}
                  {author.social.github && (
                    <a
                      href={author.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-button"
                    >
                      GitHub
                    </a>
                  )}
                  {author.social.linkedin && (
                    <a
                      href={author.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-button"
                    >
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <form className="contact-form" onSubmit={handleSubmit}>
          {isSubmitted && (
            <div className="form-message success">
              Thank you! Your message has been sent.
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          </form>
        </ScrollReveal>
      </div>
    </div>
  )
}

export default Contact

