import { useMemo } from 'react'
import { blogPosts } from '../data/posts'
import ScrollReveal from './ScrollReveal'
import '../styles/BlogStats.css'

function BlogStats() {
  const stats = useMemo(() => {
    const totalPosts = blogPosts.length
    const categories = new Set(blogPosts.map(p => p.category)).size
    const tags = new Set(blogPosts.flatMap(p => p.tags || [])).size
    const totalWords = blogPosts.reduce((sum, post) => {
      return sum + post.content.join(' ').split(/\s+/).length
    }, 0)

    return {
      totalPosts,
      categories,
      tags,
      totalWords: Math.round(totalWords / 1000) // Convert to thousands
    }
  }, [])

  return (
    <ScrollReveal delay={100}>
      <div className="blog-stats">
        <h3 className="blog-stats-title">Blog Stats</h3>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-value">{stats.totalPosts}</div>
            <div className="stat-label">Posts</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{stats.categories}</div>
            <div className="stat-label">Categories</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{stats.tags}</div>
            <div className="stat-label">Tags</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{stats.totalWords}k+</div>
            <div className="stat-label">Words</div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

export default BlogStats

