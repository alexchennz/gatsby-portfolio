import React from "react"
import { Link } from "gatsby"

const BlogCard = ({ post }) => {
  return (
    <article className="bg-slate-800 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:-translate-y-2">
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-400 mb-2">{post.title}</h3>
        <div className="flex gap-3 text-sm text-gray-400 mb-3">
          <span>{post.date}</span>
          <span className="bg-blue-600/30 text-blue-300 px-2 py-0.5 rounded">{post.category}</span>
        </div>
        <p className="text-gray-300 mb-4">{post.description}</p>
        <Link 
          to={post.url} 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors mt-2"
        >
          Read More
        </Link>
      </div>
    </article>
  )
}

export default BlogCard
