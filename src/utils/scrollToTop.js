export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}

export const scrollToTopInstant = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant'
  })
}

// Route change scroll - instant for better UX
export const scrollToTopOnRouteChange = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant'
  })
}
