import React, { useState } from "react"
import Layout from "../components/layout"
import Section from "../components/Section"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    console.log("Form submitted:", formData)
    alert("Thanks for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <Layout>
      <Section
        title="Get in Touch"
        description="Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible."
        className="pt-24"
      >
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="Your name"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="Your email"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors font-medium w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </Section>
    </Layout>
  )
}

export default ContactPage
