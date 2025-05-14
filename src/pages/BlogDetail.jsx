import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setBlog(res.data);
      } catch (error) {
        console.error('Error fetching blog detail:', error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className='min-h-screen pt-14 flex items-center justify-center'>
      <div className="max-w-4xl mx-auto p-6 shadow-md rounded-lg dark:bg-white bg-gray-900 dark:text-gray-900 text-white">
        <img src={blog.image} alt={blog.title} className="w-full h-64 object-contain mb-6" />
        <h1 className="text-2xl font-bold mb-2">{blog.title}</h1>
        <p>{blog.description}</p>
        <p className="mt-4 font-semibold text-blue-600 dark:text-blue-400">${blog.price}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
