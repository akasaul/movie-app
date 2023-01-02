import React from 'react'
import { Link } from 'react-router-dom'

const NewCard = ({img, date, title, id}) => {
  return (
    <div className='h-64 cursor-pointer w-[35vw] sm:w-[20vw] md:p-5 flex flex-col p-2 justify-end min-w-[120px] bg-no-repeat bg-center rounded-xl' style={{backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.73)),
    url(https://image.tmdb.org/t/p/original/${img})`}}>
        <h3 className='text-[1rem]'>{title?.length > 20 ? `${title?.slice(0, 20)}...` : title }</h3>
        <p>{date?.split("-")[0]}</p>
        <div className='flex justify-between space-x-2'>
          <Link to={`/movie/${id}`}>
            <button className='p-1 px-5 bg-red rounded-full'>Watch</button>
          </Link>
          <button className='bg-black h-7 w-7 rounded-full '>+</button>
        </div>
      </div>
  )
}

export default NewCard