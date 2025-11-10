import { Link } from 'react-router-dom'
import { siteConfig } from '../data/siteData'
import Newsletter from './Newsletter'
import '../styles/Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>{siteConfig.name}</h3>
            <p className="footer-tagline">{siteConfig.tagline}</p>
          </div>
          
          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/archive">Archive</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/library">Library</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
        
        <div className="footer-middle">
          <Newsletter />
        </div>
        
        <div className="footer-bottom">
          <p className="footer-quote">"{siteConfig.footerQuote}"</p>
          <div className="footer-bottom-meta">
            <p className="footer-motto">{siteConfig.motto}</p>
            <p className="footer-copyright">
              © {currentYear} {siteConfig.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

