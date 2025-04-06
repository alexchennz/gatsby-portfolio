import React from "react"

const Section = ({ id, title, description, children, className = "" }) => {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        {(title || description) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl font-bold mb-4 text-text">{title}</h2>}
            {description && (
              <p className="text-text max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export default Section
