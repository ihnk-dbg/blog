import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Navigation from './components/Navigation'
import ReadingProgress from './components/ReadingProgress'
import BackToTop from './components/BackToTop'
import QuoteHighlight from './components/QuoteHighlight'
import ToastContainer from './components/Toast'
import KeyboardShortcuts from './components/KeyboardShortcuts'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Projects from './pages/Projects'
import Library from './pages/Library'
import Archive from './pages/Archive'
import About from './pages/About'
import Contact from './pages/Contact'
import Author from './pages/Author'
import Footer from './components/Footer'
import './styles/App.css'

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('❌ Error caught by boundary:', error)
    console.error('Error info:', errorInfo)
    this.setState({ errorInfo })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '40px', 
          color: 'red', 
          fontFamily: 'monospace',
          background: '#fff',
          minHeight: '100vh'
        }}>
          <h1>⚠️ Something went wrong</h1>
          <details style={{ marginTop: '20px' }}>
            <summary>Error Details (click to expand)</summary>
            <pre style={{ 
              background: '#f5f5f5', 
              padding: '20px', 
              marginTop: '10px',
              overflow: 'auto',
              maxHeight: '400px'
            }}>
              {this.state.error?.toString()}
              {this.state.errorInfo?.componentStack}
            </pre>
          </details>
          <button 
            onClick={() => window.location.reload()} 
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            Reload Page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

function App() {
  console.log('🚀 App component rendering...')
  
  try {
    return (
      <ErrorBoundary>
        <ThemeProvider>
          <Router basename={import.meta.env.BASE_URL}>
            <ScrollToTop />
            <div className="App">
              <KeyboardShortcuts />
              <ReadingProgress />
              <Navigation />
              <QuoteHighlight />
              <ToastContainer />
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/post/:slug" element={<BlogPost />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/library" element={<Library />} />
                  <Route path="/archive" element={<Archive />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/author/:authorName" element={<Author />} />
                </Routes>
              </main>
              <Footer />
              <BackToTop />
            </div>
          </Router>
        </ThemeProvider>
      </ErrorBoundary>
    )
  } catch (error) {
    console.error('❌ Error in App component:', error)
    return (
      <div style={{ padding: '20px', color: 'red' }}>
        <h1>Error in App Component</h1>
        <pre>{error.toString()}</pre>
      </div>
    )
  }
}

export default App
