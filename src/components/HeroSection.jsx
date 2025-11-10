import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getQuoteOfTheDay, siteConfig } from '../data/siteData'
import { blogPosts } from '../data/posts'
import { sortPostsByDate } from '../utils/dateSort'
import ScrollReveal from './ScrollReveal'
import '../styles/HeroSection.css'

function HeroSection() {
  const [quote, setQuote] = useState('')
  // Sort posts by date and get the 3 newest
  const sortedPosts = sortPostsByDate(blogPosts)
  const featuredPosts = sortedPosts.slice(0, 3)

  useEffect(() => {
    setQuote(getQuoteOfTheDay())
  }, [])

  return (
    <section className="hero-section">
      <div className="hero-content">
        <ScrollReveal delay={0}>
          <div className="hero-quote">
            <p className="quote-text">"{quote}"</p>
            <p className="quote-attribution">— {siteConfig.tagline}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="hero-main">
            <h1 className="hero-title">{siteConfig.name}</h1>
            <p className="hero-description">{siteConfig.description}</p>
          </div>
        </ScrollReveal>

        {featuredPosts.length > 0 && (
          <ScrollReveal delay={200}>
            <div className="featured-posts">
              <h2 className="featured-title">Featured Posts</h2>
              <div className="featured-grid">
                {featuredPosts.map((post, index) => (
                  <ScrollReveal key={post.id} delay={index * 100}>
                    <Link
                      to={`/post/${post.slug}`}
                      className="featured-card"
                    >
                      {post.image && (
                        <div className="featured-image">
                          <img src={post.image} alt={post.title} loading="lazy" />
                        </div>
                      )}
                      <div className="featured-content">
                        <span className="featured-category">{post.category}</span>
                        <h3>{post.title}</h3>
                        <p className="featured-excerpt">{post.excerpt}</p>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}

export default HeroSection

