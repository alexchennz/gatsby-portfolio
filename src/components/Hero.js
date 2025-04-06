import React from "react"
import { Link } from "gatsby"

const Hero = ({ data }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-5xl mx-auto">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm {data.author}
            </h1>
            <p className="text-blue-400 text-xl mb-4">{data.role}</p>
            <p className="text-gray-300 mb-8 max-w-lg">
              {data.description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href={data.resumeUrl} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors font-medium"
              >
                Download Resume
              </a>
              <Link 
                to={data.contactUrl} 
                className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-md transition-colors font-medium"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-full border-4 border-blue-500 overflow-hidden shadow-xl">
              <img 
                src="/images/profile/avatar.jpg" 
                alt={data.author} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
