/**
 * Parse a date string in format "Month Day, Year" (e.g., "March 8, 2024")
 * Returns a Date object for sorting
 */
export function parseDate(dateString) {
  try {
    // Handle format like "March 8, 2024"
    const date = new Date(dateString)
    
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      // Fallback: try to parse manually
      const dateParts = dateString.trim().split(' ')
      if (dateParts.length >= 3) {
        const monthName = dateParts[0] // "March"
        const day = parseInt(dateParts[1].replace(',', '')) // "8"
        const year = parseInt(dateParts[2]) // "2024"
        
        const monthMap = {
          January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
          July: 6, August: 7, September: 8, October: 9, November: 10, December: 11,
        }
        
        const month = monthMap[monthName]
        if (month !== undefined && !isNaN(day) && !isNaN(year)) {
          return new Date(year, month, day)
        }
      }
      
      // If all else fails, return a very old date so it appears last
      console.warn(`Could not parse date: ${dateString}`)
      return new Date(0)
    }
    
    return date
  } catch (error) {
    console.error(`Error parsing date: ${dateString}`, error)
    return new Date(0)
  }
}

/**
 * Sort posts by date (newest first)
 */
export function sortPostsByDate(posts) {
  return [...posts].sort((a, b) => {
    const dateA = parseDate(a.date)
    const dateB = parseDate(b.date)
    return dateB - dateA // Newest first (descending order)
  })
}

