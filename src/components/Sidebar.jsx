import React from 'react'
import {AiFillHome} from "react-icons/ai";
import {MdLocalMovies, MdOutlineLocalMovies, MdOutlineAccountCircle, MdAccountCircle} from "react-icons/md";
import {FiLogOut} from "react-icons/fi";


const Sidebar = () => {
  return (
    <div className='bg-primary hidden md:block p-0 border-r-2 border-gray min-w-[200px]'>
      <h4 className='text-[1rem] uppercase my-5 mx-5'>menu</h4>
      <div className='flex flex-col space-y-2'>
        <button className='flex items-center space-x-2 px-3 hover:border-r-2 hover:border-red focus:border-r-2 focus:border-red focus:bg-black w-full p-1 hover:bg-black'>
          <AiFillHome className='text-red text-[1.2rem]' />
          <p className='text-lightGray hover:text-white'>Home</p>
        </button>
        
        <button className='flex items-center space-x-2 px-3 hover:border-r-2 hover:border-red focus:border-r-2 focus:border-red focus:bg-black w-full p-1 hover:bg-black'>
          <MdOutlineLocalMovies className='text-red text-[1.2rem]' />
          <p className='text-lightGray hover:text-white'>New</p>
        </button>
        
        <button className='flex items-center space-x-2 px-3 hover:border-r-2 hover:border-red focus:border-r-2 focus:border-red focus:bg-black w-full p-1 hover:bg-black'>
          <MdOutlineAccountCircle className='text-red text-[1.2rem]' />
          <p className='text-lightGray hover:text-white'>Trending</p>
        </button>
      </div>

      <h4 className='text-[1rem] uppercase my-5 mx-5'>Account</h4>
      <div className='flex flex-col space-y-2'>
        <button className='flex items-center space-x-2 px-3 hover:border-r-2 hover:border-red focus:border-r-2 focus:border-red focus:bg-black w-full p-1 hover:bg-black'>
          <FiLogOut className='text-red text-[1.2rem]' />
          <p className='text-lightGray hover:text-white'>Logout</p>
        </button>
        
        <button className='flex items-center space-x-2 px-3 hover:border-r-2 focus:border-r-2 focus:border-red focus:bg-black hover:border-red w-full p-1 hover:bg-black'>
          <MdAccountCircle className='text-red text-[1.2rem]' />
          <p className='text-lightGray hover:text-white'>Me</p>
        </button>
      </div>
    </div>
  )
}

export default Sidebar