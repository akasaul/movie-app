import React from 'react'
import {CiStreamOn} from "react-icons/ci";
import {AiOutlineMenu} from "react-icons/ai";
import {IoMdNotificationsOutline} from "react-icons/io";
import {AiFillAppstore} from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex justify-between p-3 w-[100%] flex-1 bg-black">
      <div className='flex space-x-16 ml-11'>
        <h3 className='text-lightGray cursor-pointer hover:text-white'>Movies</h3>
        <h3 className='text-lightGray cursor-pointer hover:text-white'>TvShows</h3>
      </div>
      <div className='flex'>
        <CiStreamOn className='text-red text-[1.3rem] mx-2 cursor-pointer hover:text-white' />
        <IoMdNotificationsOutline className='text-red text-[1.3rem] mx-2 cursor-pointer hover:text-white' />
        <AiFillAppstore className='text-red text-[1.3rem] mx-2 cursor-pointer hover:text-white' />
      </div>
    </div>
  )
}

export default Navbar