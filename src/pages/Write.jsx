import React from 'react'

import { useState } from 'react';

const Write = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title,
      image,
      description,
      createdAt: new Date().toISOString(),
    };

    console.log("New Post:", newPost);
    // You can POST this to your backend or push to state/store
    alert("Post submitted!");
  };

  return (
    <div className='min-h-screen flex items-center justify-center w-full'>
      <div className="p-6 w-1/2 mx-auto dark:bg-white bg-gray-900 dark:text-gray-900 text-white rounded-2xl shadow-lg min-w-[800px] min-h-[500px]"> 
        <h2 className="text-2xl text-center font-bold mb-4">Create a New Blog Post</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded dark:text-white text-gray-900 dark:bg-gray-900 bg-white "
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border p-2 rounded dark:text-white text-gray-900 dark:bg-gray-900 bg-white"
          />
          <textarea
            placeholder="Write your blog here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 rounded h-40 dark:text-white text-gray-900 dark:bg-gray-900 bg-white"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-lime-600 text-white py-2 px-4 rounded hover:bg-lime-700"
          >
            Publish
          </button>
        </form>
      </div>
    </div>
  );
};

export default Write;

