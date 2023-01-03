import React from 'react'
import {useState, useEffect} from "react";
import {MdKeyboardArrowRight} from "react-icons/md";
import { AiFillStar } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Trending = () => {
  const [movies, setMovies] = useState([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchMovies = async () => {
      const res  = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=edf9f1037d7f378a1c1c94b65cea98d4");
      const data = await res.json();
      setMovies(data.results);
      console.log(movies);
    }
    fetchMovies();
  }, []);
  return (
    <div>
      <div className='flex items-center px-16 justify-between cursor-pointer'>
        <h3 className='text-[1.1rem] my-2'>Trending</h3>
        <span className='flex items-center'>
          <p className='text-lightGray'>See All</p>
          <MdKeyboardArrowRight className='text-lightGray' />
        </span>
      </div>
        <div className="carousel max-w-[900px] mx-auto">
          <div id="item1" className="relative trending__item cursor-pointer carousel-item w-full" onClick={() => navigate(`/movie/${movies[0]?.id}`)}>
            <img src={`https://image.tmdb.org/t/p/original/${movies[0]?.poster_path}`} className="w-full rounded-xl h-72 object-cover" />
                <h3 className='absolute bottom-5 left-5 z-10 text-[2rem]'>{movies[0]?.name || movies[0]?.title}</h3>
                <div className='absolute p-1 px-3 rounded flex space-x-3 items-center bg-black/50'>
                      <AiFillStar className='text-[white]' />
                      <p>{movies[0]?.vote_average?.toFixed(1)}</p>
                </div>
          </div> 
          <div id="item2" className="relative trending__item cursor-pointer carousel-item w-full" onClick={() => navigate(`/movie/${movies[1]?.id}`)}>
            <img src={`https://image.tmdb.org/t/p/original/${movies[1]?.poster_path}`} className="w-full rounded-xl h-72 object-cover" />
            <h3 className='absolute bottom-5 left-5 z-10 text-[2rem]'>{movies[1]?.name || movies[1]?.title}</h3>
            <div className='absolute p-1 px-3 rounded flex space-x-3 items-center bg-black/50'>
                  <AiFillStar className='text-[white]' />
                  <p>{movies[1]?.vote_average?.toFixed(1)}</p>
            </div>
          </div> 
          <div id="item3" className="relative trending__item cursor-pointer carousel-item w-full" onClick={() => navigate(`/movie/${movies[2]?.id}`)}>
            <img src={`https://image.tmdb.org/t/p/original/${movies[2]?.poster_path}`} className="w-full rounded-xl h-72 object-cover" />
            <h3 className='absolute bottom-5 left-5 z-10 text-[2rem]'>{movies[2]?.name || movies[2]?.title}</h3>
            <div className='absolute p-1 px-3 rounded flex space-x-3 items-center bg-black/50'>
                  <AiFillStar className='text-[white]' />
                  <p>{movies[2]?.vote_average?.toFixed(1)}</p>
            </div>
          </div> 
          <div id="item4" className="relative trending__item cursor-pointer carousel-item w-full" onClick={() => navigate(`/movie/${movies[3]?.id}`)}>
            <img src={`https://image.tmdb.org/t/p/original/${movies[3]?.poster_path}`} className="w-full rounded-xl h-72 object-cover" />
            <h3 className='absolute bottom-5 left-5 z-10 text-[2rem]'>{movies[3]?.name || movies[3]?.title}</h3>
            <div className='absolute p-1 rounded flex space-x-3 items-center bg-black/50'>
                  <AiFillStar className='text-[white]' />
                  <p>{movies[3]?.vote_average?.toFixed(1)}</p>
            </div>
          </div>
        </div> 
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">1</a> 
          <a href="#item2" className="btn btn-xs">2</a> 
          <a href="#item3" className="btn btn-xs">3</a> 
          <a href="#item4" className="btn btn-xs">4</a>
        </div>
      </div>
  )
}

export default Trending