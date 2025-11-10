import { useEffect, useState } from 'react'
import '../styles/QuoteHighlight.css'

function QuoteHighlight() {
  const [selectedText, setSelectedText] = useState('')
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleSelection = () => {
      try {
        const selection = window.getSelection()
        if (!selection) return
        
        const text = selection.toString().trim()

        if (text.length > 0 && selection.rangeCount > 0) {
          setSelectedText(text)
          const range = selection.getRangeAt(0)
          const rect = range.getBoundingClientRect()
          setPosition({
            x: rect.left + rect.width / 2,
            y: rect.top - 60,
          })
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      } catch (error) {
        // Silently handle selection errors
        setIsVisible(false)
      }
    }

    const handleClick = () => {
      setTimeout(() => {
        try {
          const selection = window.getSelection()
          if (!selection || selection.toString().trim() === '') {
            setIsVisible(false)
          }
        } catch (error) {
          setIsVisible(false)
        }
      }, 100)
    }

    document.addEventListener('mouseup', handleSelection)
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('mouseup', handleSelection)
      document.removeEventListener('click', handleClick)
    }
  }, [])

  const shareQuote = () => {
    if (selectedText) {
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${selectedText}"`)}`
      window.open(twitterUrl, '_blank', 'width=600,height=400')
      setIsVisible(false)
      window.getSelection().removeAllRanges()
    }
  }

  if (!isVisible) return null

  return (
    <div
      className={`quote-highlight ${isVisible ? 'visible' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translateX(-50%)',
      }}
    >
      <button onClick={shareQuote}>Share Quote</button>
    </div>
  )
}

export default QuoteHighlight

