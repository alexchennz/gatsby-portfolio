import React, { useEffect, useRef } from "react"

const ScrollReveal = ({ children, className = "" }) => {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.1 }
    )
    
    if (element) {
      observer.observe(element)
    }
    
    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <div ref={elementRef} className={`reveal ${className}`}>
      {children}
    </div>
  )
}

export default ScrollReveal
