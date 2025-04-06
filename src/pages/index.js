import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import Section from "../components/Section"
import ProjectCard from "../components/ProjectCard"

// Fallback project data in case GraphQL query fails
const fallbackProjects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with modern UI and secure payment processing.",
    image: "/images/projects/project-1.jpg",
    techStack: ["React", "Node.js", "MongoDB"],
    detailUrl: "/projects/e-commerce-platform",
    demoUrl: "#"
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative task management with real-time updates and team features.",
    image: "/images/projects/project-2.jpg",
    techStack: ["Vue.js", "Firebase", "Vuex"],
    detailUrl: "/projects/task-management-app",
    demoUrl: "#"
  }
]


export default function Home({data}) {
  console.log(data)
  
  // Use GraphQL data for projects if available, otherwise use fallback
  const projects = data.projects ? data.projects.nodes : fallbackProjects;
  
  return (
    <Layout>
      <Hero data={data.site.siteMetadata} />
      
      <Section 
        id="featured-projects"
        title="Featured Projects"
        description="Here are some of my recent works that showcase my skills and experience."
      >
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link 
            to="/projects" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors inline-block"
          >
            View All Projects
          </Link>
        </div>
      </Section>
      
      <Section id="contact">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-300 mb-8">
            Have a question or want to work together? I'd love to hear from you!
          </p>
          <Link 
            to="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition-colors inline-block font-medium"
          >
            Get in Touch
          </Link>
        </div>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        author
        description
        siteUrl
        title
        contactUrl
        resumeUrl
      }
    }
    projects: allProjectsJson {
      nodes {
        id
        title
        description
        image
        techStack
        detailUrl
        demoUrl
      }
    }
  }
`