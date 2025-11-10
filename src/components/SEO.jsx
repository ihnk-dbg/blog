import { useEffect } from 'react'

function SEO({ title, description, image, url }) {
  useEffect(() => {
    // Update document title
    document.title = title ? `${title} | My Blog` : 'My Blog'

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name'
      let element = document.querySelector(`meta[${attribute}="${name}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    if (description) {
      updateMetaTag('description', description)
      updateMetaTag('og:description', description, true)
    }

    if (image) {
      updateMetaTag('og:image', image, true)
    }

    if (url) {
      updateMetaTag('og:url', url, true)
    }

    updateMetaTag('og:title', title || 'My Blog', true)
    updateMetaTag('og:type', 'website', true)
  }, [title, description, image, url])

  return null
}

export default SEO

