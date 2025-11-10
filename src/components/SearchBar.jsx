import { useState } from 'react'
import '../styles/SearchBar.css'

function SearchBar({ onSearch, placeholder = 'Search posts...' }) {
  const [query, setQuery] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    setQuery(value)
    onSearch(value)
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="search-input"
        aria-label="Search posts"
      />
      <span className="search-icon">🔍</span>
    </div>
  )
}

export default SearchBar

