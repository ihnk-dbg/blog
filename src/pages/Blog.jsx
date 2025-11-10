import { useState, useMemo, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { blogPosts, getCategories } from '../data/posts'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import TagCloud from '../components/TagCloud'
import BlogStats from '../components/BlogStats'
import ScrollReveal from '../components/ScrollReveal'
import SEO from '../components/SEO'
import { createSearchIndex, searchPosts } from '../utils/search'
import { calculateReadingTime } from '../utils/readingTime'
import { sortPostsByDate } from '../utils/dateSort'
import '../styles/Blog.css'

function Blog() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const selectedCategory = searchParams.get('category') || 'all'
  const selectedTag = searchParams.get('tag')
  const categories = getCategories()
  const [searchIndex, setSearchIndex] = useState(null)

  useEffect(() => {
    if (blogPosts && blogPosts.length > 0) {
      const index = createSearchIndex(blogPosts, ['title', 'excerpt', 'tags', 'author'])
      setSearchIndex(index)
    }
  }, [])

  const handleCategoryChange = (category) => {
    const newParams = new URLSearchParams(searchParams)
    if (category === 'all') {
      newParams.delete('category')
    } else {
      newParams.set('category', category)
    }
    // Keep tag if it exists - tag is handled by TagCloud navigation
    setSearchParams(newParams, { replace: true })
  }

  const filteredPosts = useMemo(() => {
    let posts = blogPosts

    // Apply search
    if (searchQuery) {
      posts = searchPosts(posts, searchQuery, searchIndex)
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      posts = posts.filter(post => post.category === selectedCategory)
    }

    // Apply tag filter
    if (selectedTag) {
      posts = posts.filter(post => post.tags?.includes(selectedTag))
    }

    // Sort posts by date (newest first)
    return sortPostsByDate(posts)
  }, [searchQuery, selectedCategory, selectedTag, searchIndex])

  return (
    <div className="blog-page">
      <SEO
        title="Blog"
        description="Explore articles on code, philosophy, and creation."
      />

      <ScrollReveal>
        <header className="blog-header">
          <h1>Blog</h1>
          <p className="blog-subtitle">
            Thoughts, tutorials, and reflections on code and philosophy
          </p>
        </header>
      </ScrollReveal>

      <div className="blog-layout">
        <aside className="blog-sidebar">
          <BlogStats />
          <TagCloud />
        </aside>
        
        <div className="blog-main">
          <ScrollReveal delay={100}>
            <div className="blog-filters">
              <SearchBar
                onSearch={setSearchQuery}
                placeholder="Search posts by title, content, or tags..."
              />
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={handleCategoryChange}
              />
              {selectedTag && (
                <div className="active-tag-filter">
                  <span>Filtered by: <strong>{selectedTag}</strong></span>
                  <Link to="/blog" className="clear-filter-link">Clear</Link>
                </div>
              )}
            </div>
          </ScrollReveal>

          <div className="blog-content">
            <ScrollReveal delay={150}>
              <div className="posts-count">
                <p>
                  {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
                </p>
              </div>
            </ScrollReveal>

            {filteredPosts.length > 0 ? (
              <div className="posts-grid">
                {filteredPosts.map((post, index) => {
                  const readingTime = calculateReadingTime(post.content)
                  return (
                    <ScrollReveal key={post.id} delay={index * 50}>
                      <article className="post-card">
                        {post.image && (
                          <div className="post-card-image">
                            <Link to={`/post/${post.slug}`}>
                              <img src={post.image} alt={post.title} loading="lazy" />
                            </Link>
                          </div>
                        )}
                        <div className="post-card-content">
                          <div className="post-meta-top">
                            <span className="post-category">{post.category}</span>
                            <span className="post-date">{post.date}</span>
                          </div>
                          <h3>
                            <Link to={`/post/${post.slug}`}>{post.title}</Link>
                          </h3>
                          <p className="post-excerpt">{post.excerpt}</p>
                          <div className="post-footer-card">
                            <div className="post-meta-bottom">
                              <Link
                                to={`/author/${encodeURIComponent(post.author)}`}
                                className="post-author"
                              >
                                by {post.author}
                              </Link>
                              <span className="reading-time">{readingTime.text}</span>
                            </div>
                            <Link to={`/post/${post.slug}`} className="read-more">
                              Read More →
                            </Link>
                          </div>
                        </div>
                      </article>
                    </ScrollReveal>
                  )
                })}
              </div>
            ) : (
              <ScrollReveal>
                <div className="no-posts">
                  <p>No posts match your search criteria. Try adjusting your filters.</p>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
