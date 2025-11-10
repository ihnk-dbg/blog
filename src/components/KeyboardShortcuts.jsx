import { useEffect } from 'react'
import { setupKeyboardShortcuts } from '../utils/keyboardShortcuts'

function KeyboardShortcuts() {
  useEffect(() => {
    const cleanup = setupKeyboardShortcuts()
    return cleanup
  }, [])

  return null // This component doesn't render anything
}

export default KeyboardShortcuts

