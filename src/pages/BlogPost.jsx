import { useParams, Link, useNavigate } from 'react-router-dom'
import { blogPosts } from '../data/posts'
import SEO from '../components/SEO'
import SocialShare from '../components/SocialShare'
import ReactionButtons from '../components/ReactionButtons'
import PhilosophyMode from '../components/PhilosophyMode'
import GiscusComments from '../components/GiscusComments'
import ScrollReveal from '../components/ScrollReveal'
import { calculateReadingTime } from '../utils/readingTime'
import { sortPostsByDate } from '../utils/dateSort'
import '../styles/BlogPost.css'

function BlogPost() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="post-not-found">
        <SEO title="Post Not Found" />
        <h1>Post Not Found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
        <Link to="/">Back to Home</Link>
      </div>
    )
  }

  const postUrl = `/post/${post.slug}`
  const readingTime = calculateReadingTime(post.content)
  // Get related posts, sort by date, and take the 3 newest
  const relatedPosts = sortPostsByDate(
    blogPosts.filter((p) => p.id !== post.id && (p.category === post.category || p.author === post.author))
  ).slice(0, 3)

  return (
    <article className="blog-post">
      <SEO
        title={post.title}
        description={post.excerpt}
        image={post.image}
        url={postUrl}
      />

      <ScrollReveal>
        <button onClick={() => navigate(-1)} className="back-button">
          ← Back
        </button>
      </ScrollReveal>

      <ScrollReveal delay={50}>
        <header className="post-header">
          <div className="post-meta-top">
            <span className="post-category">{post.category}</span>
            <div className="post-meta-right">
              <span className="post-date">{post.date}</span>
              <span className="reading-time">{readingTime.text}</span>
            </div>
          </div>
          <h1>{post.title}</h1>
          <div className="post-author-meta">
            <Link to={`/author/${encodeURIComponent(post.author)}`} className="author-link">
              by {post.author}
            </Link>
          </div>
          {post.tags && (
            <div className="post-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>
      </ScrollReveal>

      {post.image && (
        <ScrollReveal delay={100}>
          <div className="post-image">
            <img src={post.image} alt={post.title} loading="lazy" />
          </div>
        </ScrollReveal>
      )}

      <ScrollReveal delay={150}>
        <div className="post-content">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </ScrollReveal>
      
      <PhilosophyMode>
        <div className="philosophy-content-text">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </PhilosophyMode>

      <ScrollReveal delay={200}>
        <ReactionButtons postId={post.id} />
      </ScrollReveal>

      <ScrollReveal delay={250}>
        <div className="post-share">
          <SocialShare title={post.title} url={postUrl} />
        </div>
      </ScrollReveal>

      {relatedPosts.length > 0 && (
        <ScrollReveal delay={300}>
          <section className="related-posts">
            <h2>Related Posts</h2>
            <div className="related-posts-grid">
              {relatedPosts.map((relatedPost, index) => (
                <ScrollReveal key={relatedPost.id} delay={index * 50}>
                  <article className="related-post-card">
                    {relatedPost.image && (
                      <div className="related-post-image">
                        <Link to={`/post/${relatedPost.slug}`}>
                          <img src={relatedPost.image} alt={relatedPost.title} loading="lazy" />
                        </Link>
                      </div>
                    )}
                    <div className="related-post-content">
                      <h3>
                        <Link to={`/post/${relatedPost.slug}`}>{relatedPost.title}</Link>
                      </h3>
                      <p className="related-post-excerpt">{relatedPost.excerpt}</p>
                      <Link to={`/post/${relatedPost.slug}`} className="read-more">
                        Read More →
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>
      )}

      <ScrollReveal delay={350}>
        <section className="comments-section">
          <h2>Comments</h2>
          <GiscusComments />
        </section>
      </ScrollReveal>

      <ScrollReveal delay={400}>
        <footer className="post-footer">
          <Link to="/blog" className="back-home-link">
            ← Back to All Posts
          </Link>
        </footer>
      </ScrollReveal>
    </article>
  )
}

export default BlogPost
