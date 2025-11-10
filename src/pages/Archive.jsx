import { Link } from 'react-router-dom'
import { blogPosts } from '../data/posts'
import { calculateReadingTime } from '../utils/readingTime'
import SEO from '../components/SEO'
import ScrollReveal from '../components/ScrollReveal'
import '../styles/Archive.css'

function Archive() {
  // Group posts by year and month - using the date string directly
  const postsByDate = blogPosts.reduce((acc, post) => {
    try {
      // Parse the date string (e.g., "March 8, 2024")
      const dateParts = post.date.split(' ')
      if (dateParts.length >= 3) {
        const month = dateParts[0] // "March"
        const year = parseInt(dateParts[2]) // "2024"
        
        const yearMonth = `${year}-${month}`
        
        if (!acc[yearMonth]) {
          acc[yearMonth] = {
            year,
            month,
            posts: [],
          }
        }
        
        acc[yearMonth].posts.push({
          ...post,
          day: parseInt(dateParts[1].replace(',', '')) || Math.floor(Math.random() * 28) + 1, // Extract day or random
        })
      } else {
        // Fallback for unexpected date formats
        const fallbackDate = new Date()
        const year = fallbackDate.getFullYear()
        const month = fallbackDate.toLocaleString('default', { month: 'long' })
        const yearMonth = `${year}-${month}`
        
        if (!acc[yearMonth]) {
          acc[yearMonth] = {
            year,
            month,
            posts: [],
          }
        }
        
        acc[yearMonth].posts.push({
          ...post,
          day: Math.floor(Math.random() * 28) + 1,
        })
      }
    } catch (error) {
      console.error(`Error parsing date for post: ${post.title}`, error)
    }
    return acc
  }, {})

  // Sort by date (newest first)
  const sortedDates = Object.values(postsByDate).sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year
    const monthOrder = {
      January: 1, February: 2, March: 3, April: 4, May: 5, June: 6,
      July: 7, August: 8, September: 9, October: 10, November: 11, December: 12,
    }
    return monthOrder[b.month] - monthOrder[a.month]
  })

  // Sort posts within each month by day (newest first)
  sortedDates.forEach(group => {
    group.posts.sort((a, b) => (b.day || 0) - (a.day || 0))
  })

  return (
    <div className="archive-page">
      <SEO
        title="Archive"
        description="Browse all blog posts by date - a timeline of thoughts and ideas."
      />

      <ScrollReveal>
        <header className="archive-header">
          <h1>Archive</h1>
          <p className="archive-subtitle">
            A timeline of all posts, organized by date
          </p>
          <p className="archive-count">
            {blogPosts.length} {blogPosts.length === 1 ? 'post' : 'posts'} in total
          </p>
        </header>
      </ScrollReveal>

      <div className="archive-timeline">
        {sortedDates.map((group, groupIndex) => (
          <ScrollReveal key={`${group.year}-${group.month}`} delay={groupIndex * 100}>
            <div className="archive-group">
              <div className="archive-date-header">
                <h2 className="archive-year">{group.year}</h2>
                <h3 className="archive-month">{group.month}</h3>
              </div>
              <div className="archive-posts">
                {group.posts.map((post, postIndex) => {
                  const readingTime = calculateReadingTime(post.content)
                  return (
                    <ScrollReveal key={post.id} delay={postIndex * 50}>
                      <article className="archive-post">
                    <div className="archive-post-date">
                      <span>{post.day || '?'}</span>
                    </div>
                    <div className="archive-post-content">
                      <Link to={`/post/${post.slug}`} className="archive-post-title">
                        {post.title}
                      </Link>
                      <p className="archive-post-excerpt">{post.excerpt}</p>
                      <div className="archive-post-meta">
                        <span className="archive-post-category">{post.category}</span>
                        <span className="archive-post-reading-time">{readingTime.text}</span>
                      </div>
                    </div>
                      </article>
                    </ScrollReveal>
                  )
                })}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}

export default Archive
