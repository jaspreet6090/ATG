import React from 'react';

const PostBar = () => {
  return (
    <section className="mt-4">
    <div className="hidden xl:block">
    <div className="flex justify-between items-center my-4 py-2 px-4 border-b border-gray-300">
      <div className="flex space-x-4 
      ">
        <button className="text-black font-semibold  text-xl">
          All Posts <span className="text-gray-600">(32)</span>
        </button>
        <button className="text-gray-500 text-xl hover:text-black">Article</button>
        <button className="text-gray-500 text-xl hover:text-black">Event</button>
        <button className="text-gray-500 text-xl hover:text-black">Education</button>
        <button className="text-gray-500 text-xl hover:text-black">Job</button>
      </div>
      <div className="flex space-x-4">
        <button className="text-black text-xl font-medium border border-gray-300 px-4 py-1 rounded-md hover:bg-gray-100">
          Write a Post <i class="fa-solid fa-caret-down"></i>
        </button>
        <button className="text-white text-xl font-medium bg-blue-600 px-4 py-1 rounded-md hover:bg-blue-700">
        <i class="fa-solid fa-user-plus"></i> Join Group
        </button>
      </div>
    </div>
    </div>
    <div className="xl:hidden block">

    <div className="flex justify-between items-center ">
    <h2 className='text-xl font-semibold'>Post(368)</h2>
      <div className="bg-gray-300 p-3 flex gap-4 rounded-xl">
        Filter:All
        <i class="fa-solid fa-caret-down"></i>
      </div>
    </div>
    </div>
    </section>
  );
};

export default PostBar;
