import { useMemo } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { blogPosts } from '../data/posts'
import ScrollReveal from './ScrollReveal'
import '../styles/TagCloud.css'

function TagCloud() {
  const location = useLocation()
  const navigate = useNavigate()

  // Get all tags with counts
  const tagsWithCounts = useMemo(() => {
    const tagCounts = {}
    
    blogPosts.forEach(post => {
      post.tags?.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1
      })
    })

    return Object.entries(tagCounts)
      .map(([tag, count]) => ({ tag, count }))
      .sort((a, b) => b.count - a.count)
  }, [])

  // Calculate font size based on count (more posts = larger tag)
  const getTagSize = (count) => {
    if (tagsWithCounts.length === 0) return 1
    const maxCount = Math.max(...tagsWithCounts.map(t => t.count))
    if (maxCount === 0) return 1
    const minSize = 0.75
    const maxSize = 1.5
    const ratio = count / maxCount
    return minSize + (maxSize - minSize) * ratio
  }

  if (tagsWithCounts.length === 0) {
    return (
      <div className="tag-cloud">
        <h3 className="tag-cloud-title">Tags</h3>
        <p style={{ color: 'var(--text-muted)' }}>No tags available</p>
      </div>
    )
  }

  const handleTagClick = (tag) => {
    try {
      // Navigate to blog page with tag filter
      navigate(`/blog?tag=${encodeURIComponent(tag)}`)
    } catch (error) {
      console.error('Error navigating to tag:', error)
    }
  }

  return (
    <ScrollReveal>
      <div className="tag-cloud">
        <h3 className="tag-cloud-title">Tags</h3>
        <div className="tag-cloud-container">
          {tagsWithCounts.slice(0, 20).map(({ tag, count }, index) => (
            <button
              key={tag}
              className="tag-cloud-item"
              onClick={() => handleTagClick(tag)}
              style={{ fontSize: `${getTagSize(count)}rem` }}
              title={`${count} ${count === 1 ? 'post' : 'posts'}`}
            >
              {tag}
              <span className="tag-count">({count})</span>
            </button>
          ))}
        </div>
      </div>
    </ScrollReveal>
  )
}

export default TagCloud

