import React from 'react'

const TopRatedCard = ({img, rating, date, title}) => {
  return (
    <div className='h-64 w-[35vw] p-2 md:p-5 flex flex-col justify-between xs-[120px] sm:w-[20vw] min-w-[120px] bg-no-repeat bg-center rounded-xl' style={{backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.73)),
    url(https://image.tmdb.org/t/p/original/${img})`}}>
    <span className='flex bg-black w-10  items-center rounded-lg'>
        <img className='object-contain h-4 p-0' src="https://upload.wikimedia.org/wikipedia/donate/thumb/4/44/YellowStar.svg/424px-YellowStar.svg.png?20160715211119" alt="" />
        <span className='p-0 pt-1'>{rating?.toFixed(1)}</span>
    </span>
    <div className='mt-24'>
        <h3 className='text-[1rem]'>{title?.length > 20 ? `${title?.slice(0, 20)}...` : title }</h3>
        <p>{date?.split("-")[0]}</p>
    </div>
    <div className='flex justify-between space-x-2'>
        <button className='p-1 px-5 bg-red rounded-full'>Watch</button>
        <button className='bg-black h-7 w-7 rounded-full '>+</button>
      </div>
    </div>
  )
}

export default TopRatedCard