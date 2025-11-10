import { useState } from 'react'
import '../styles/ReactionButtons.css'

function ReactionButtons({ postId }) {
  const [reactions, setReactions] = useState(() => {
    const saved = localStorage.getItem(`reactions-${postId}`)
    return saved ? JSON.parse(saved) : { heart: 0, clap: 0, mindblown: 0 }
  })

  const [userReactions, setUserReactions] = useState(() => {
    const saved = localStorage.getItem(`user-reactions-${postId}`)
    return saved ? JSON.parse(saved) : { heart: false, clap: false, mindblown: false }
  })

  const handleReaction = (type) => {
    setReactions(prev => {
      const newReactions = { ...prev }
      const hasReacted = userReactions[type]
      
      if (hasReacted) {
        newReactions[type] = Math.max(0, newReactions[type] - 1)
      } else {
        newReactions[type] = (newReactions[type] || 0) + 1
      }
      
      localStorage.setItem(`reactions-${postId}`, JSON.stringify(newReactions))
      return newReactions
    })

    setUserReactions(prev => {
      const newUserReactions = { ...prev, [type]: !prev[type] }
      localStorage.setItem(`user-reactions-${postId}`, JSON.stringify(newUserReactions))
      return newUserReactions
    })
  }

  return (
    <div className="reaction-buttons">
      <button
        className={`reaction-btn ${userReactions.heart ? 'active' : ''}`}
        onClick={() => handleReaction('heart')}
        aria-label="Love this post"
      >
        ❤️ <span>{reactions.heart || 0}</span>
      </button>
      <button
        className={`reaction-btn ${userReactions.clap ? 'active' : ''}`}
        onClick={() => handleReaction('clap')}
        aria-label="Clap for this post"
      >
        👏 <span>{reactions.clap || 0}</span>
      </button>
      <button
        className={`reaction-btn ${userReactions.mindblown ? 'active' : ''}`}
        onClick={() => handleReaction('mindblown')}
        aria-label="Mind blown"
      >
        🤯 <span>{reactions.mindblown || 0}</span>
      </button>
    </div>
  )
}

export default ReactionButtons

