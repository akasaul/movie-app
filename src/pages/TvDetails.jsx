import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from "../components/Navbar";
import Navmobile from "../components/Navmobile";
import RecommendationCard from '../components/Recommended';
import Sidebar from '../components/Sidebar';
import {AiOutlinePlus, AiFillStar} from "react-icons/ai";
import {FaPlay} from "react-icons/fa";
import Recommended from '../components/Recommended';
import RecommendTv from '../components/RecommendTv';

const TvDetails = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2]; 
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const fetchTvDetails = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=edf9f1037d7f378a1c1c94b65cea98d4&language=en-US`);
      const data = await res.json();
      setMovie(data)
      console.log(data)
    }
    fetchTvDetails();
  }, [])
  console.log(id);
  return (
    <div className='md:relative'>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center space-y-5">
        <div className='self-stretch'>
          <Sidebar />
        </div>
          
        <div className='bg-red mt-8 md:mt-0 min-w-[350px]  text-white h-[500px] w-[90%] p-5 rounded-3xl md:rounded-none md:h-screen md:w-full mx-auto bg-cover bg-no-repeat bg-center' style={{backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.73)),
    url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`}}>
          <div className="flex space-x-3 md:hidden">
            <button className="p-2 text-center bg-slate-100/20 backdrop-blur-sm rounded-full px-5">Featured</button>
            <button className="p-2 text-center bg-slate-100/20 backdrop-blur-sm rounded-full px-5 flex items-center space-x-2">
              <span>4.2</span>
             <span>
                  <img className="object-contain h-3 p-0" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/whatsapp/326/star_2b50.png" alt="" />
              </span>
            </button>
            <button className="p-2 text-center bg-slate-100/20 backdrop-blur-sm rounded-full px-5">1h 57m</button>
          </div>
        </div>

        <div className="w-[90%] mx-auto pb-24 flex flex-col items-center md:items-start md:justify-start md:w-[40%] md:max-w-[350px] md:h-screen md:p-5 space-y-5 md:absolute md:left-[200px]">
          <h3 className="text-[1.6rem] md:text-[1.9rem] font-montserat font-bold">{movie?.name}</h3>
          <div className="flex space-x-3 md:hidden">
            <button className="p-2 text-center bg-slate-100/20 backdrop-blur-sm rounded-full px-5">Action</button>
            <button className="p-2 text-center bg-slate-100/20 backdrop-blur-sm rounded-full px-5">Adventure</button>
            <button className="p-2 text-center bg-slate-100/20 backdrop-blur-sm rounded-full px-5">Myth</button>
          </div>

          <div className="md:flex space-x-3 hidden">
            <button className="px-2 border-r-2 border-gray">Action</button>
            <button className="px-2 border-r-2 border-gray">Adventure</button>
            <button className="px-2 border-r-2 border-gray">Myth</button>
          </div>
          <div className='md:flex hidden items-center justify-between w-48'>
            <div>
              <button className='p-2 bg-red'>
                <AiOutlinePlus />
              </button >
              <button className='p-2 bg-black'>
                <FaPlay className='text-white' />
              </button>
            </div>

            <div>
              <button className='flex items-center'>
                <AiFillStar className='text-white' />
                <p>{movie?.vote_average?.toFixed(1)}</p>
              </button>
            </div>
          </div>
          <div className='font-montserat'>
            {movie?.overview?.length > 200 ? `${movie?.overview?.slice(0, 200)}..` : movie?.overview }
          </div>
          <button className="w-[90%] md:hidden block mx-auto bg-red text-white rounded-full p-3 uppercase">Add to watchlist</button>
        </div>
        <div className='hidden space-x-5 max-w-[700px] left-[200px] mx-auto z-40 md:flex items-end  absolute bottom-0'>
          <RecommendTv id={id}  />
        </div>
      </div>
      <Navmobile />
    </div>
  )
}

export default TvDetails