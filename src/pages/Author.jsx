import { useParams, Link } from 'react-router-dom'
import { authors, blogPosts } from '../data/posts'
import SEO from '../components/SEO'
import Avatar from '../components/Avatar'
import { sortPostsByDate } from '../utils/dateSort'
import '../styles/Author.css'

function Author() {
  const { authorName } = useParams()
  const decodedName = decodeURIComponent(authorName)
  const author = authors[decodedName]
  // Sort author posts by date (newest first)
  const authorPosts = sortPostsByDate(blogPosts.filter(post => post.author === decodedName))

  if (!author) {
    return (
      <div className="author-not-found">
        <SEO title="Author Not Found" />
        <h1>Author Not Found</h1>
        <p>The author you're looking for doesn't exist.</p>
        <Link to="/">Back to Home</Link>
      </div>
    )
  }

  return (
    <div className="author-page">
      <SEO
        title={author.name}
        description={author.bio}
      />
      <div className="author-header">
        <Avatar name={author.name} size="xl" />
        <div className="author-header-info">
          <h1>{author.name}</h1>
          <p className="author-bio">{author.bio}</p>
          <div className="author-social-links">
            {author.social.twitter && (
              <a
                href={author.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                Twitter
              </a>
            )}
            {author.social.github && (
              <a
                href={author.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                GitHub
              </a>
            )}
            {author.social.linkedin && (
              <a
                href={author.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>

      <section className="author-posts">
        <h2>Posts by {author.name}</h2>
        {authorPosts.length > 0 ? (
          <div className="posts-grid">
            {authorPosts.map((post) => (
              <article key={post.id} className="post-card">
                {post.image && (
                  <div className="post-card-image">
                    <img src={post.image} alt={post.title} />
                  </div>
                )}
                <div className="post-card-content">
                  <span className="post-date">{post.date}</span>
                  <h3>
                    <Link to={`/post/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <Link to={`/post/${post.slug}`} className="read-more">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p>No posts yet.</p>
        )}
      </section>
    </div>
  )
}

export default Author

