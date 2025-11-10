import { authors } from '../data/posts'
import { siteConfig } from '../data/siteData'
import SEO from '../components/SEO'
import Avatar from '../components/Avatar'
import ScrollReveal from '../components/ScrollReveal'
import '../styles/About.css'

function About() {
  const mainAuthor = Object.values(authors)[0] || {}

  return (
    <div className="about-page">
      <SEO
        title="About"
        description={siteConfig.description}
      />
      <ScrollReveal>
        <header className="about-header">
          <h1>About</h1>
          <p className="about-intro">
            {siteConfig.tagline}
          </p>
        </header>
      </ScrollReveal>

      <section className="about-content">
        <ScrollReveal delay={100}>
          <div className="about-section">
            <h2>Who I Am</h2>
            <p>
              I'm {siteConfig.author}, a developer, thinker, and creator exploring the intersection
              of code, philosophy, and human experience. This journal is my space to share thoughts,
              experiments, and reflections on technology, design, and life.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="about-section">
            <h2>What I Write About</h2>
            <ul className="topics-list">
              <li>Code and software development</li>
              <li>Philosophy and existential thinking</li>
              <li>Design and user experience</li>
              <li>Creative projects and experiments</li>
              <li>Learning and growth</li>
              <li>The intersection of technology and humanity</li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="about-section">
            <h2>My Mission</h2>
            <p>
              To explore, create, and share. To build things that matter and think deeply about
              the questions that drive us. To connect logic with meaning, code with philosophy,
              and technology with humanity.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {mainAuthor && (
        <ScrollReveal delay={400}>
          <section className="author-profile">
            <div className="author-profile-card">
              <Avatar name={mainAuthor.name || siteConfig.author} size="xl" />
              <div className="author-profile-info">
                <h2>{mainAuthor.name || siteConfig.author}</h2>
                <p className="author-profile-bio">{mainAuthor.bio || siteConfig.description}</p>
                {mainAuthor.social && (
                  <div className="author-profile-social">
                    {mainAuthor.social.twitter && (
                      <a
                        href={mainAuthor.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        Twitter
                      </a>
                    )}
                    {mainAuthor.social.github && (
                      <a
                        href={mainAuthor.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        GitHub
                      </a>
                    )}
                    {mainAuthor.social.linkedin && (
                      <a
                        href={mainAuthor.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        LinkedIn
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>
        </ScrollReveal>
      )}
    </div>
  )
}

export default About
