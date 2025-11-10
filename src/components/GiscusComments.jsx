import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import '../styles/GiscusComments.css'

const GISCUS_CONFIG = {
  repo: 'ian-dbg/blog',
  repoId: 'YOUR_REPO_ID',
  category: 'Announcements',
  categoryId: 'YOUR_CATEGORY_ID',
  mapping: 'pathname',
  strict: '0',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'bottom',
  lang: 'en',
  loading: 'lazy',
}

function GiscusComments() {
  const { isDark } = useTheme()
  const location = useLocation()
  const commentsRef = useRef(null)
  const scriptLoadedRef = useRef(false)

  useEffect(() => {
    if (GISCUS_CONFIG.repoId === 'YOUR_REPO_ID' || GISCUS_CONFIG.categoryId === 'YOUR_CATEGORY_ID') {
      return
    }

    const existingScript = document.querySelector('script[src*="giscus"]')
    if (existingScript) {
      existingScript.remove()
    }

    const existingIframe = commentsRef.current?.querySelector('iframe')
    if (existingIframe) {
      existingIframe.remove()
    }

    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', GISCUS_CONFIG.repo)
    script.setAttribute('data-repo-id', GISCUS_CONFIG.repoId)
    script.setAttribute('data-category', GISCUS_CONFIG.category)
    script.setAttribute('data-category-id', GISCUS_CONFIG.categoryId)
    script.setAttribute('data-mapping', GISCUS_CONFIG.mapping)
    script.setAttribute('data-strict', GISCUS_CONFIG.strict)
    script.setAttribute('data-reactions-enabled', GISCUS_CONFIG.reactionsEnabled)
    script.setAttribute('data-emit-metadata', GISCUS_CONFIG.emitMetadata)
    script.setAttribute('data-input-position', GISCUS_CONFIG.inputPosition)
    script.setAttribute('data-theme', isDark ? 'dark' : 'light')
    script.setAttribute('data-lang', GISCUS_CONFIG.lang)
    script.setAttribute('data-loading', GISCUS_CONFIG.loading)
    script.setAttribute('crossorigin', 'anonymous')
    script.async = true

    if (commentsRef.current) {
      commentsRef.current.appendChild(script)
      scriptLoadedRef.current = true
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [location.pathname, isDark])

  const isConfigured = GISCUS_CONFIG.repoId !== 'YOUR_REPO_ID' && 
                      GISCUS_CONFIG.categoryId !== 'YOUR_CATEGORY_ID'

  if (!isConfigured) {
    return (
      <div className="giscus-setup">
        <div className="giscus-setup-content">
          <h3>💬 Comments Coming Soon</h3>
          <p>To enable comments on your blog posts, you need to set up Giscus (GitHub-powered comments).</p>
          <div className="giscus-setup-steps">
            <h4>Quick Setup:</h4>
            <ol>
              <li>
                Visit <a href="https://giscus.app/" target="_blank" rel="noopener noreferrer">giscus.app</a> and sign in with GitHub
              </li>
              <li>Select your repository and enable Discussions in GitHub repo settings</li>
              <li>Copy your configuration from Giscus</li>
              <li>Open <code>src/components/GiscusComments.jsx</code></li>
              <li>Update the <code>GISCUS_CONFIG</code> object with your values</li>
            </ol>
            <p className="giscus-setup-note">
              <strong>Note:</strong> Comments are optional. Your blog works perfectly without them!
            </p>
            <a 
              href="https://giscus.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="giscus-setup-button"
            >
              Set Up Giscus →
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="giscus-container" ref={commentsRef} />
  )
}

export default GiscusComments

