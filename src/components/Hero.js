import React from "react"
import { Link } from "gatsby"

const Hero = ({ data }) => {
  return (
    <section className="py-20 bg-primary-gradient flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-5xl mx-auto">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-primary">{data.author}</span>
            </h1>
            <p className="text-2xl font-medium mb-6 text-primary-light">Full Stack Developer</p>
            <p className="text-lg mb-8 text-text">
              {data.description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link 
                to={data.resumeUrl} 
                className="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-md transition-colors"
              >
                View Resume
              </Link>
              <Link 
                to={data.contactUrl} 
                className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-md transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary mx-auto">
                <img 
                  src="/images/profile/avatar.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-lg shadow-lg">
                <p className="text-primary font-bold">10+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
