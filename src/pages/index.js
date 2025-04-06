import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import Section from "../components/Section"
import ProjectCard from "../components/ProjectCard"
import BlogCard from "../components/BlogCard"

// Use hardcoded data for now until GraphQL is working
const siteData = {
  title: "DevPortfolio",
  author: "Alex Chen",
  role: "Full Stack Developer",
  description: "I build exceptional digital experiences with modern web technologies. Passionate about creating innovative solutions that make a difference.",
  resumeUrl: "#",
  contactUrl: "/contact"
}

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

const blogData = [
  {
    id: "1",
    title: "Getting Started with React Hooks",
    date: "April 6, 2025",
    category: "React",
    description: "An in-depth guide to understanding and implementing React Hooks in your applications.",
    image: "/images/blog/post-1.jpg",
    url: "/blog/getting-started-with-react-hooks"
  },
  {
    id: "2",
    title: "Building Scalable APIs with GraphQL",
    date: "April 3, 2025",
    category: "GraphQL",
    description: "Explore the benefits of GraphQL and learn how to build efficient, scalable APIs.",
    image: "/images/blog/post-2.jpg",
    url: "/blog/building-scalable-apis-with-graphql"
  }
]

export default function Home() {
  return (
    <Layout>
      <Hero data={siteData} />
      
      <Section 
        id="featured-projects"
        title="Featured Projects"
        description="Here are some of my recent works that showcase my skills and experience."
      >
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map(project => (
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
      
      <Section 
        id="latest-posts"
        title="Latest Blog Posts"
        description="Sharing my thoughts and experiences in web development."
        className="bg-slate-800/50"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {blogData.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link 
            to="/blog" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors inline-block"
          >
            View All Posts
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
