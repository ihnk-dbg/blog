// Keyboard shortcuts for the blog

export function setupKeyboardShortcuts() {
  const handleKeyPress = (e) => {
    // Don't trigger if user is typing in an input, textarea, or contenteditable
    if (
      e.target.tagName === 'INPUT' ||
      e.target.tagName === 'TEXTAREA' ||
      e.target.isContentEditable
    ) {
      return
    }

    // '/' - Focus search (only if not in input)
    if (e.key === '/' && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
      e.preventDefault()
      const searchInput = document.querySelector('.search-input')
      if (searchInput) {
        searchInput.focus()
        searchInput.select()
      }
    }

    // 'k' or 'Cmd/Ctrl + k' - Focus search
    if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault()
      const searchInput = document.querySelector('.search-input')
      if (searchInput) {
        searchInput.focus()
        searchInput.select()
      }
    }

    // Escape - Blur search
    if (e.key === 'Escape') {
      const searchInput = document.querySelector('.search-input:focus')
      if (searchInput) {
        searchInput.blur()
      }
    }

    // '?' - Show keyboard shortcuts help
    if (e.key === '?' && !e.ctrlKey && !e.metaKey) {
      e.preventDefault()
      showKeyboardShortcutsHelp()
    }
  }

  document.addEventListener('keydown', handleKeyPress)

  return () => {
    document.removeEventListener('keydown', handleKeyPress)
  }
}

function showKeyboardShortcutsHelp() {
  // This will be implemented with a modal or toast
  console.log('Keyboard Shortcuts:')
  console.log('/ - Focus search')
  console.log('k or Cmd/Ctrl + k - Focus search')
  console.log('Escape - Blur search')
  console.log('? - Show this help')
}

