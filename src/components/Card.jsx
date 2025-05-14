import React from 'react'
import { Link } from 'react-router-dom'


const Card = ({ blog }) => {
  return (
    <div className="dark:bg-white dark:text-gray-900 bg-gray-900 text-white rounded-lg shadow hover:shadow-md transition overflow-hidden flex flex-col">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full mt-2 h-48 object-contain rounded-t-lg"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold">{blog.title}</h2>
        <p className="text-sm mt-2 line-clamp-3">{blog.description}</p>
        <div className="mt-auto pt-4">
        <Link to={`/blog/${blog.id}`} className="text-blue-500 hover:underline">
          Read More
        </Link>
        </div>
      </div>
    </div>


  )
}


export default Card
