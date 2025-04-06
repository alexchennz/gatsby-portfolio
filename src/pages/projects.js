import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
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

const ProjectsPage = ({ data }) => {
  // Use GraphQL data if available, otherwise use fallback
  const projects = data.allProjectsJson ? data.allProjectsJson.nodes : fallbackProjects;
  
  return (
    <Layout>
      <Section
        title="My Projects"
        description="A collection of my work that demonstrates my skills and experience."
        className="pt-24"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsQuery {
    allProjectsJson {
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

export default ProjectsPage
