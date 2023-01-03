import React from 'react'
import {AiFillHome} from "react-icons/ai";
import {MdLocalMovies, MdOutlineLogin, MdOutlineLocalMovies, MdOutlineAccountCircle, MdAccountCircle} from "react-icons/md";
import {FiLogOut} from "react-icons/fi";
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { auth } from '../firebase';


const Sidebar = () => {
  const user = useSelector(state => state.user.user);
  return (
    <div className='bg-primary hidden md:block p-0 border-r-2 border-gray min-w-[200px]'>
      <Link to="/">
        <img className='object-contain h-10 mt-5 ml-3' src="/nikoflix.png" alt="" />
      </Link>
      <h4 className='text-[1rem] uppercase my-5 mx-5'>menu</h4>
      <div className='flex flex-col space-y-2'>
        <Link to="/">
          <button className='flex items-center space-x-2 px-3 hover:border-r-2 hover:border-red focus:border-r-2 focus:border-red focus:bg-black w-full p-1 hover:bg-black'>
            <AiFillHome className='text-red text-[1.2rem]' />
            <p className='text-lightGray hover:text-white'>Home</p>
          </button>
        </Link>        
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
        {
          user ? 
          <Link to="/login">
            <button className='flex items-center space-x-2 px-3 hover:border-r-2 hover:border-red focus:border-r-2 focus:border-red focus:bg-black w-full p-1 hover:bg-black' onClick={() => signOut(auth)}>
              <FiLogOut className='text-red text-[1.2rem]' />
              <p className='text-lightGray hover:text-white'>Logout</p>
            </button>
          </Link>
        :
        <Link to="/login">
          <button className='flex items-center space-x-2 px-3 hover:border-r-2 hover:border-red focus:border-r-2 focus:border-red focus:bg-black w-full p-1 hover:bg-black'>
            <MdOutlineLogin className='text-red text-[1.2rem]' />
            <p className='text-lightGray hover:text-white'>Log In</p>
          </button>
        </Link>
        }

        {
          user &&
          <button className='flex items-center space-x-2 px-3 hover:border-r-2 focus:border-r-2 focus:border-red focus:bg-black hover:border-red w-full p-1 hover:bg-black'>
            <MdAccountCircle className='text-red text-[1.2rem]' />
            <p className='text-lightGray hover:text-white'>Me</p>
          </button>
        }
      </div>
    </div>
  )
}

export default Sidebar