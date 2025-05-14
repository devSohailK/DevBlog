import React from 'react';

const Profile = () => {
  const user = {
    username: 'devuser123',
    email: 'dev@example.com',
    posts: [
      { id: 1, title: 'Learning React the Right Way' },
      { id: 2, title: 'Advanced JavaScript Concepts' },
    ],
  };

  return (
    <div className='min-h-screen flex mt-14 w-full'>
      <div className="p-6 w-full mx-auto mt-2 dark:bg-white bg-gray-900 text-white dark:text-gray-900 shadow-lg ">
        <h2 className="text-2xl text-center font-bold mb-4">My Profile</h2>
        <p className='text-center'><strong>Username:</strong> {user.username}</p>
        <p className='text-center'><strong>Email:</strong> {user.email}</p>

        <h3 className="text-xl text-center font-semibold mt-6 mb-2">My Posts</h3>
        <ul className="flex flex-col items-center justify-center gap-4">
          {user.posts.map((post) => (
            <li key={post.id} className="border text-center p-3 rounded-xl w-1/3 hover:text-white hover:bg-orange-700 dark:hover:bg-orange-700 bg-white text-gray-950 dark:bg-gray-900 dark:text-white ">
              {post.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;

