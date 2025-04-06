import "./src/styles/global.css"

// Add Google Fonts
export const onClientEntry = () => {
  const link = document.createElement("link")
  link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
  link.rel = "stylesheet"
  document.head.appendChild(link)
}