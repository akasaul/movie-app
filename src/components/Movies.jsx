import React from 'react'
import {BiSearch} from "react-icons/bi";

const Movies = () => {
  const genere = [{"id":28,name:"Action"},{"id":12,name:"Adventure"},{"id":16,name:"Animation"},{"id":35,name:"Comedy"},{"id":80,name:"Crime"},{"id":99,name:"Documentary"},{"id":18,name:"Drama"},{"id":10751,name:"Family"},{"id":14,name:"Fantasy"},{"id":36,name:"History"},{"id":27,name:"Horror"},{"id":10402,name:"Music"},{"id":9648,name:"Mystery"},{"id":10749,name:"Romance"},{"id":878,name:"Science Fiction"},{"id":10770,name:"TV Movie"},{"id":53,name:"Thriller"},{"id":10752,name:"War"},{"id":37,name:"Western"}];
  return (
    <div className='md:block hidden p-3 border-l-2 border-gray  min-w-[220px] lg:w-[250px]'>
      <div className='flex space-x-2 my-3 justify-center'>
        <img className='object-contain h-10 w-10 rounded-full border-2 border-red' src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" alt="" />
        <div>
          <h3 className='font-bold'>21 savage</h3>
          <p className='text-lightGray'>21savage@...</p>
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <input placeholder='Search' className='w-[80%] p-2 ml-5 rounded-full' />
        <BiSearch className='text-lg -ml-8'/>
      </div>
      <div>
        <h3 className='my-3'>GENERE</h3>
        <div className='grid grid-flow-column gap-2 grid-cols-2'>
          {
            genere.map((item) => (
               <button className='bg-white px-3 flex items-center space-x-2 justify-between rounded-full text-black'>
                <p>{item.name.length > 10 ? `${item.name.slice(0, 7)}..` : item.name}</p>
            </button>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Movies