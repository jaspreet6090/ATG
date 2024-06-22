import React from 'react'
import PostBar from './PostBar'
import EventCard from './EventCard'

const PostContainer = () => {
  return (
    <section className='sm:px-[5px] lg:px-[172px]  py-3'>
      <div className=" border-b-2 border-gray-300"></div>
      <div className="md:px-[128px] ">
      <PostBar/>

      <EventCard/>
      </div>

    </section>
  )
}

export default PostContainer
