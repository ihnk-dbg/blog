import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

console.log('🔵 main.jsx loaded')

// Verify root element exists
const rootElement = document.getElementById('root')
console.log('🔵 Root element:', rootElement)

if (!rootElement) {
  console.error('❌ Root element not found! Make sure index.html has <div id="root"></div>')
  document.body.innerHTML = '<div style="padding: 20px; color: red; background: white;"><h1>Error: Root element not found</h1><p>Make sure index.html has &lt;div id="root"&gt;&lt;/div&gt;</p></div>'
} else {
  console.log('✅ Root element found')
  
  // Initialize theme before rendering
  try {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    document.documentElement.setAttribute('data-theme', savedTheme)
    console.log('✅ Theme initialized:', savedTheme)
  } catch (error) {
    console.warn('⚠️ Could not access localStorage:', error)
    document.documentElement.setAttribute('data-theme', 'dark')
  }

  // Handle 404.html redirect for GitHub Pages SPA routing
  // The 404.html redirects paths like /blog/about to /blog/?/about
  // Parse the query string to extract the redirected path
  try {
    const search = window.location.search
    if (search && search.startsWith('?/')) {
      // Extract the path from the query string (e.g., "?/about" -> "/about")
      // The format is: /blog/?/about&other=params -> we want "/about"
      const pathMatch = search.match(/^\?\/([^&]*)/)
      if (pathMatch) {
        let pathFromQuery = '/' + pathMatch[1]
        // Clean up the path (replace ~and~ with &)
        pathFromQuery = pathFromQuery.replace(/~and~/g, '&')
        
        // Get the base path from the current pathname (e.g., "/blog" from "/blog/")
        const pathname = window.location.pathname
        const basePath = pathname.split('/').slice(0, 2).join('/') || '/'
        
        // Construct the new path
        const newPath = basePath + pathFromQuery + (window.location.hash || '')
        
        // Replace the URL without triggering a reload
        window.history.replaceState({}, '', newPath)
        console.log('🔄 Handled 404 redirect:', search, '->', newPath)
      }
    }
  } catch (error) {
    console.warn('⚠️ Error handling 404 redirect:', error)
  }

  // Scroll to top on page load
  window.scrollTo(0, 0)

  // Render the app
  try {
    console.log('🔵 Attempting to render React app...')
    const root = ReactDOM.createRoot(rootElement)
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
    console.log('✅ React app mounted successfully!')
  } catch (error) {
    console.error('❌ Error mounting React app:', error)
    rootElement.innerHTML = `
      <div style="padding: 20px; color: red; font-family: monospace; background: white;">
        <h1>Error Mounting React App</h1>
        <pre>${error.toString()}</pre>
        <p>Check the browser console for more details.</p>
        <p>Error stack: ${error.stack || 'No stack trace'}</p>
      </div>
    `
  }
}
