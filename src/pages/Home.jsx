import React from 'react'
import Card from '../components/Card'
import { useState, useEffect } from 'react'


export default function Home() {

  const [visibleCount, setVisibleCount] = useState(6);
  const [blogss, setBlogss] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch('https://fakestoreapi.com/products?limit=12');
      const data = await res.json();
      

      const blogs = data.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        image: item.image,
      }));

      setBlogss(blogs);
    };

    fetchBlogs();
  }, []);


  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="min-h-screen pt-14 flex flex-col">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 dark:text-white w shadow p-4 text-center text-2xl font-bold text-gray-800">
        DevBlog - Explore Developer Stories
      </header>

      {/* Blog Grid */}
      <main className="flex-grow p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogss.slice(0, visibleCount).map((blog) => (
            <Card key={blog.id} blog={blog} />
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < blogss.length && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition"
            >
              Load More
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="dark:bg-white bg-gray-900 shadow p-4 text-center text-white dark:text-gray-900 text-sm">
        &copy; {new Date().getFullYear()} DevBlog. All rights reserved.
      </footer>
    </div>
  )

}
