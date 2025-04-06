import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Section from "../components/Section"

const ProjectDetail = ({ data }) => {
  const project = data.projectsJson

  return (
    <Layout>
      <Section className="pt-24">
        <div className="max-w-4xl mx-auto">
          <Link to="/projects" className="text-primary hover:text-primary-light mb-6 inline-block">
            &larr; Back to Projects
          </Link>
          
          <div className="bg-card rounded-lg overflow-hidden shadow-xl">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-80 object-cover"
            />
            
            <div className="p-8">
              <h1 className="text-3xl font-bold text-primary mb-4">{project.title}</h1>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-primary text-white text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="prose prose-invert prose-primary max-w-none mb-8">
                <p className="text-text text-lg mb-6">{project.description}</p>
                
                {project.longDescription && (
                  <div dangerouslySetInnerHTML={{ __html: project.longDescription }} />
                )}
                
                {project.features && (
                  <>
                    <h2 className="text-xl font-bold text-text mt-8 mb-4">Key Features</h2>
                    <ul className="list-disc pl-5 space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="text-text">{feature}</li>
                      ))}
                    </ul>
                  </>
                )}
                
                {project.challenges && (
                  <>
                    <h2 className="text-xl font-bold text-text mt-8 mb-4">Challenges & Solutions</h2>
                    <p className="text-text">{project.challenges}</p>
                  </>
                )}
              </div>
              
              {/* <div className="flex gap-4 mt-8">
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-md transition-colors"
                  >
                    View Live Demo
                  </a>
                )}
                
                {project.repoUrl && (
                  <a 
                    href={project.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-md transition-colors"
                  >
                    View Source Code
                  </a>
                )}
              </div> */}
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetailQuery($id: String!) {
    projectsJson(id: { eq: $id }) {
      id
      title
      description
      longDescription
      image
      techStack
      features
      challenges
      demoUrl
      repoUrl
    }
  }
`

export default ProjectDetail
