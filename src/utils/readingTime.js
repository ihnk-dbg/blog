// Simple reading time calculator (replacement for reading-time package)
// Calculates reading time based on average reading speed of 200 words per minute

export function calculateReadingTime(content) {
  let wordCount = 0
  
  if (typeof content === 'string') {
    wordCount = content.split(/\s+/).filter(word => word.length > 0).length
  } else if (Array.isArray(content)) {
    const text = content.join(' ')
    wordCount = text.split(/\s+/).filter(word => word.length > 0).length
  }
  
  // Average reading speed: 200 words per minute
  const wordsPerMinute = 200
  const minutes = wordCount / wordsPerMinute
  const roundedMinutes = minutes < 1 ? 1 : Math.ceil(minutes)
  
  return {
    text: roundedMinutes === 1 ? '1 min read' : `${roundedMinutes} min read`,
    minutes: roundedMinutes,
    words: wordCount,
  }
}

export function formatReadingTime(minutes) {
  if (minutes < 1) {
    return 'Less than 1 min read'
  } else if (minutes === 1) {
    return '1 min read'
  } else {
    return `${Math.ceil(minutes)} min read`
  }
}
