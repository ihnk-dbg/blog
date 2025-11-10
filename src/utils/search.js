import Fuse from 'fuse.js'

export function createSearchIndex(items, keys) {
  if (!items || items.length === 0) {
    return null
  }
  
  const fuse = new Fuse(items, {
    keys: keys || ['title', 'excerpt', 'tags', 'content', 'author'],
    threshold: 0.3,
    includeScore: true,
    minMatchCharLength: 2,
  })
  return fuse
}

export function searchPosts(posts, query, searchIndex) {
  if (!query || query.trim() === '') {
    return posts
  }

  if (searchIndex) {
    const results = searchIndex.search(query)
    return results.map(result => result.item)
  }

  // Fallback to simple search
  const lowerQuery = query.toLowerCase()
  return posts.filter(post => {
    return (
      post.title.toLowerCase().includes(lowerQuery) ||
      post.excerpt.toLowerCase().includes(lowerQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
      post.author.toLowerCase().includes(lowerQuery)
    )
  })
}

