import { useState, useEffect } from 'react'
import '../styles/Toast.css'

let toastId = 0
const toasts = []
const listeners = []

export function showToast(message, type = 'info', duration = 3000) {
  const id = toastId++
  const toast = { id, message, type, duration }
  toasts.push(toast)
  listeners.forEach(listener => listener([...toasts]))
  
  if (duration > 0) {
    setTimeout(() => {
      removeToast(id)
    }, duration)
  }
  
  return id
}

export function removeToast(id) {
  const index = toasts.findIndex(t => t.id === id)
  if (index > -1) {
    toasts.splice(index, 1)
    listeners.forEach(listener => listener([...toasts]))
  }
}

function ToastContainer() {
  const [toastList, setToastList] = useState([])

  useEffect(() => {
    listeners.push(setToastList)
    return () => {
      const index = listeners.indexOf(setToastList)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [])

  return (
    <div className="toast-container">
      {toastList.map(toast => (
        <div
          key={toast.id}
          className={`toast toast-${toast.type}`}
          onClick={() => removeToast(toast.id)}
        >
          <span className="toast-message">{toast.message}</span>
          <button className="toast-close">×</button>
        </div>
      ))}
    </div>
  )
}

export default ToastContainer

