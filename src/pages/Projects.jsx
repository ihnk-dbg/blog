import { useState } from 'react'
import { projects } from '../data/siteData'
import SEO from '../components/SEO'
import ScrollReveal from '../components/ScrollReveal'
import '../styles/Projects.css'

function Projects() {
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedYear, setSelectedYear] = useState('all')
  const [expandedProject, setExpandedProject] = useState(null)

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  // Get unique statuses and years
  const statuses = ['all', ...new Set(projects.map(p => p.status).filter(Boolean))]
  const uniqueYears = Array.from(new Set(projects.map(p => p.year).filter(Boolean)))
  const years = ['all', ...uniqueYears.sort((a, b) => b - a)]

  // Filter projects
  const filteredOtherProjects = otherProjects.filter(project => {
    if (selectedStatus !== 'all' && project.status !== selectedStatus) return false
    if (selectedYear !== 'all' && project.year !== selectedYear) return false
    return true
  })

  const toggleExpand = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId)
  }

  return (
    <div className="projects-page">
      <SEO
        title="Projects"
        description="Explore my projects - experiments in code, philosophy, and creation."
      />
      
      <ScrollReveal>
        <header className="projects-header">
          <h1>Projects</h1>
          <p className="projects-subtitle">
            Things I've built, experiments I've run, and tools I've created. Each project tells a story about a problem I wanted to solve or something I wanted to learn.
          </p>
          <p className="projects-intro">
            These aren't just projects—they're experiments. Some are polished, some are rough around the edges, but all of them taught me something valuable. Click on any project to learn more about what I built and why.
          </p>
        </header>
      </ScrollReveal>

      {featuredProjects.length > 0 && (
        <ScrollReveal delay={100}>
          <section className="featured-projects">
            <h2>Featured Projects</h2>
            <p className="section-description">
              These are the projects I'm most excited about. They represent significant learning experiences or solutions to real problems.
            </p>
            <div className="projects-grid">
              {featuredProjects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 100}>
                  <article className="project-card featured">
                <div className="project-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.link && project.link !== '#' && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Project
                        </a>
                      )}
                      {project.github && project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <div className="project-title-section">
                      <h3>{project.title}</h3>
                      {project.status && (
                        <span className={`project-status project-status-${project.status.toLowerCase().replace(' ', '-')}`}>
                          {project.status}
                        </span>
                      )}
                    </div>
                    {project.year && (
                      <span className="project-year">{project.year}</span>
                    )}
                  </div>
                  <p className="project-description">{project.description}</p>
                  {project.longDescription && (
                    <div className="project-expandable">
                      <button 
                        className="project-expand-btn"
                        onClick={() => toggleExpand(project.id)}
                        aria-expanded={expandedProject === project.id}
                      >
                        {expandedProject === project.id ? 'Show Less' : 'Learn More'}
                      </button>
                      {expandedProject === project.id && (
                        <div className="project-long-description">
                          <p>{project.longDescription}</p>
                          {project.technologies && project.technologies.length > 0 && (
                            <div className="project-technologies">
                              <h4>Technologies</h4>
                              <div className="tech-tags">
                                {project.technologies.map((tech, idx) => (
                                  <span key={idx} className="tech-tag">{tech}</span>
                                ))}
                              </div>
                            </div>
                          )}
                          {project.highlights && project.highlights.length > 0 && (
                            <div className="project-highlights">
                              <h4>Key Features</h4>
                              <ul>
                                {project.highlights.map((highlight, idx) => (
                                  <li key={idx}>{highlight}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>
      )}

      {otherProjects.length > 0 && (
        <ScrollReveal delay={200}>
          <section className="other-projects">
            <div className="projects-section-header">
              <h2>Other Projects</h2>
              <p className="section-description">
                More experiments, tools, and side projects. Each one represents a learning opportunity or a problem I wanted to solve.
              </p>
            </div>

            <ScrollReveal delay={250}>
              <div className="projects-filters">
            <div className="filter-group">
              <label>Status</label>
              <div className="filter-buttons">
                {statuses.map(status => (
                  <button
                    key={status}
                    className={`filter-btn ${selectedStatus === status ? 'active' : ''}`}
                    onClick={() => setSelectedStatus(status)}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <label>Year</label>
              <div className="filter-buttons">
                {years.map(year => (
                  <button
                    key={year}
                    className={`filter-btn ${selectedYear === year ? 'active' : ''}`}
                    onClick={() => setSelectedYear(year)}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="projects-stats">
                <p>
                  {filteredOtherProjects.length} {filteredOtherProjects.length === 1 ? 'project' : 'projects'} found
                </p>
              </div>
            </ScrollReveal>

            <div className="projects-grid">
              {filteredOtherProjects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 50}>
                  <article className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.link && project.link !== '#' && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Project
                        </a>
                      )}
                      {project.github && project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <div className="project-title-section">
                      <h3>{project.title}</h3>
                      {project.status && (
                        <span className={`project-status project-status-${project.status.toLowerCase().replace(' ', '-')}`}>
                          {project.status}
                        </span>
                      )}
                    </div>
                    {project.year && (
                      <span className="project-year">{project.year}</span>
                    )}
                  </div>
                  <p className="project-description">{project.description}</p>
                  {project.longDescription && (
                    <div className="project-expandable">
                      <button 
                        className="project-expand-btn"
                        onClick={() => toggleExpand(project.id)}
                        aria-expanded={expandedProject === project.id}
                      >
                        {expandedProject === project.id ? 'Show Less' : 'Learn More'}
                      </button>
                      {expandedProject === project.id && (
                        <div className="project-long-description">
                          <p>{project.longDescription}</p>
                          {project.technologies && project.technologies.length > 0 && (
                            <div className="project-technologies">
                              <h4>Technologies</h4>
                              <div className="tech-tags">
                                {project.technologies.map((tech, idx) => (
                                  <span key={idx} className="tech-tag">{tech}</span>
                                ))}
                              </div>
                            </div>
                          )}
                          {project.highlights && project.highlights.length > 0 && (
                            <div className="project-highlights">
                              <h4>Key Features</h4>
                              <ul>
                                {project.highlights.map((highlight, idx) => (
                                  <li key={idx}>{highlight}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="project-links-inline">
                    {project.link && project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-small"
                      >
                        View →
                      </a>
                    )}
                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-small"
                      >
                        Code →
                      </a>
                    )}
                  </div>
                </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>
      )}
    </div>
  )
}

export default Projects
