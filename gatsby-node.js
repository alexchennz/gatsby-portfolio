/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require("path")

// Create project detail pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve(`src/templates/project-detail.js`)
  
  // Query for all projects
  const result = await graphql(`
    query {
      allProjectsJson {
        nodes {
          id
          title
          slug
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  // Create pages for each project
  const projects = result.data.allProjectsJson.nodes
  
  projects.forEach(project => {
    // Use the project's slug from the data file, or fallback to a URL-friendly version of the title
    const slug = project.slug || project.title.toLowerCase().replace(/\s+/g, '-')
    
    createPage({
      path: `/projects/${slug}`,
      component: projectTemplate,
      context: {
        id: project.id,
      },
    })
  })
}
