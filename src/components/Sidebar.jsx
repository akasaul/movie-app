import React from 'react'
import {AiFillHome} from "react-icons/ai";
import {MdLocalMovies, MdOutlineLocalMovies, MdOutlineAccountCircle} from "react-icons/md";


const Sidebar = () => {
  return (
    <div className='bg-primary hidden md:block p-0 border-r-2 border-gray min-w-[150px]'>
      <h4 className='text-[1rem] uppercase'>menu</h4>
      <div className=''>
        <button className='flex items-center space-x-2 px-3 hover:border-r-2 hover:border-red w-full p-1 hover:bg-black'>
          <AiFillHome className='text-red' />
          <p className='text-lightGray hover:text-white'>Home</p>
        </button>
        
        <button className='flex items-center space-x-2 px-3 hover:border-r-2 hover:border-red w-full p-1 hover:bg-black'>
          <MdOutlineLocalMovies className='text-red' />
          <p className='text-lightGray hover:text-white'>New</p>
        </button>
        
        <button className='flex items-center space-x-2 px-3 hover:border-r-2 hover:border-red w-full p-1 hover:bg-black'>
          <MdOutlineAccountCircle className='text-red' />
          <p className='text-lightGray hover:text-white'>Trending</p>
        </button>
      </div>

      <h4 className='text-[1rem] uppercase'>Account</h4>
      <div>
        <button className='flex items-center space-x-2 px-3 hover:border-r-2 hover:border-red w-full p-1 hover:bg-black'>
          <MdOutlineLocalMovies className='text-red' />
          <p className='text-lightGray hover:text-white'>New</p>
        </button>
        
        <button className='flex items-center space-x-2 px-3 hover:border-r-2 hover:border-red w-full p-1 hover:bg-black'>
          <MdOutlineAccountCircle className='text-red' />
          <p className='text-lightGray hover:text-white'>Trending</p>
        </button>
      </div>
    </div>
  )
}

export default Sidebar