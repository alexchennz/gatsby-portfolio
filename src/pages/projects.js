import React from "react"
import Layout from "../components/layout"
import Section from "../components/Section"
import ProjectCard from "../components/ProjectCard"

// Use hardcoded data for now until GraphQL is working
const projectsData = [
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

const ProjectsPage = () => {
  return (
    <Layout>
      <Section
        title="My Projects"
        description="A collection of my work that demonstrates my skills and experience."
        className="pt-24"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>
    </Layout>
  )
}

export default ProjectsPage
