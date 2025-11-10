import { useState, useMemo } from 'react'
import { library } from '../data/siteData'
import SEO from '../components/SEO'
import ScrollReveal from '../components/ScrollReveal'
import '../styles/Library.css'

function Library() {
  const [selectedType, setSelectedType] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const types = ['all', 'book', 'video', 'article', 'tool']
  const categories = useMemo(() => {
    const cats = [...new Set(library.map(item => item.category).filter(Boolean))]
    return ['all', ...cats.sort()]
  }, [])

  const filteredLibrary = useMemo(() => {
    return library.filter(item => {
      const typeMatch = selectedType === 'all' || item.type === selectedType
      const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory
      return typeMatch && categoryMatch
    })
  }, [selectedType, selectedCategory])

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating)
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case 'book':
        return '📚'
      case 'video':
        return '🎥'
      case 'article':
        return '📄'
      case 'tool':
        return '🛠️'
      default:
        return '📖'
    }
  }

  const handleItemClick = (item) => {
    if (item.videoUrl) {
      window.open(item.videoUrl, '_blank', 'noopener,noreferrer')
    } else if (item.link) {
      window.open(item.link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="library-page">
      <SEO
        title="Library"
        description="Books, videos, articles, and tools that have influenced my thinking and work."
      />
      
      <ScrollReveal>
        <header className="library-header">
          <h1>Library</h1>
          <p className="library-subtitle">
            Books, videos, articles, and tools that have influenced my thinking and work
          </p>
        </header>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="library-filters">
        <div className="filter-group">
          <label>Type</label>
          <div className="filter-buttons">
            {types.map(type => (
              <button
                key={type}
                className={`filter-btn ${selectedType === type ? 'active' : ''}`}
                onClick={() => setSelectedType(type)}
              >
                {getTypeIcon(type)} {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="filter-group">
          <label>Category</label>
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <div className="library-stats">
          <p>
            {filteredLibrary.length} {filteredLibrary.length === 1 ? 'item' : 'items'} found
          </p>
        </div>
      </ScrollReveal>

      <div className="library-grid">
        {filteredLibrary.map((item, index) => (
          <ScrollReveal key={item.id} delay={index * 50}>
            <article 
              className={`library-card library-card-${item.type}`}
              onClick={() => handleItemClick(item)}
              style={{ cursor: (item.videoUrl || item.link) ? 'pointer' : 'default' }}
            >
            <div className="library-cover">
              <img src={item.cover} alt={item.title} loading="lazy" />
              {item.type === 'video' && (
                <div className="video-overlay">
                  <div className="play-button">▶</div>
                  {item.duration && <span className="video-duration">{item.duration}</span>}
                </div>
              )}
              <div className="library-type-badge">
                {getTypeIcon(item.type)} {item.type}
              </div>
            </div>
            <div className="library-content">
              <h3>{item.title}</h3>
              <p className="library-author">by {item.author}</p>
              {item.category && (
                <span className="library-category">{item.category}</span>
              )}
              <p className="library-description">{item.description}</p>
              <div className="library-rating">
                <span className="stars">{renderStars(item.rating)}</span>
                <span className="rating-text">{item.rating}/5</span>
              </div>
              {item.review && (
                <div className="library-review">
                  <p>"{item.review}"</p>
                </div>
              )}
              {(item.videoUrl || item.link) && (
                <div className="library-action">
                  <span className="library-action-text">
                    {item.type === 'video' ? 'Watch Video' : item.type === 'article' ? 'Read Article' : item.type === 'tool' ? 'Visit Tool' : 'Learn More'} →
                  </span>
                </div>
              )}
            </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}

export default Library
