import React from 'react'
import {MdOutlineHome, MdLocalMovies, MdOutlineLocalMovies, MdOutlineAccountCircle} from "react-icons/md";
import { Link } from 'react-router-dom';

const Navmobile = () => {
  return (
    <div className='md:hidden fixed bottom-0 z-40 bg-black flex w-full p-2 justify-around'>
        <Link to="/">
          <span className='flex flex-col items-center  cursor-pointer'>
              <MdOutlineHome className='text-red text-[1.5rem]' />
              <p className='text-sm text-lightGray hover:text-white'>Home</p>
          </span>
      </Link>
     
      <span className='flex flex-col items-center  cursor-pointer'>
        <MdLocalMovies className='text-red text-[1.5rem]' />
        <p className='text-sm text-lightGray hover:text-white'>Trending</p>
      </span>
     
      <span className='flex flex-col items-center  cursor-pointer'>
        <MdOutlineLocalMovies className='text-red text-[1.5rem]' />
        <p className='text-sm text-lightGray hover:text-white'>Discover</p>
      </span>

      <span className='flex flex-col items-center  cursor-pointer'>
        <MdOutlineAccountCircle className='text-red text-[1.5rem]' />
        <p className='text-sm text-lightGray hover:text-white'>Me</p>
      </span>
    </div>
  )
}

export default Navmobile