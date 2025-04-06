import React from "react"
import { Link } from "gatsby"

const ProjectCard = ({ project }) => {
  return (
    <article className="bg-slate-800 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:-translate-y-2">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-400 mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, index) => (
            <span 
              key={index}
              className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-auto">
          <Link 
            to={project.detailUrl} 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            View Details
          </Link>
          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 px-4 py-2 transition-colors"
          >
            Live Demo
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
