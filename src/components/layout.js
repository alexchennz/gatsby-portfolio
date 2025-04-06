import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import "../styles/global.css"

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme") || "dark"
    setTheme(savedTheme)
    document.documentElement.setAttribute("data-theme", savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
  }

  return (
    <div className="min-h-screen flex flex-col bg-card text-text">
      <header className="fixed w-full top-0 z-50 bg-card shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            DevPortfolio
          </Link>
          <nav className="flex items-center gap-6">
            <Link to="/" className="hover:text-primary-light transition-colors font-medium">
              Home
            </Link>
            <Link to="/projects" className="hover:text-primary-light transition-colors font-medium">
              Projects
            </Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors font-medium">
              Contact
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </nav>
        </div>
      </header>
      <main className="flex-grow pt-16">
        {children}
      </main>
      <footer className="bg-primary-gradient py-6 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
