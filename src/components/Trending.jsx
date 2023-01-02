import React from 'react'
import {useState, useEffect} from "react";
import {MdKeyboardArrowRight} from "react-icons/md";

const Trending = () => {
  const [movies, setMovies] = useState([]);
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
          <div id="item1" className="carousel-item w-full">
            <img src={`https://image.tmdb.org/t/p/original/${movies[0]?.poster_path}`} className="w-full rounded-xl h-72 object-cover" />
          </div> 
          <div id="item2" className="carousel-item w-full">
            <img src={`https://image.tmdb.org/t/p/original/${movies[1]?.poster_path}`} className="w-full rounded-xl h-72 object-cover" />
          </div> 
          <div id="item3" className="carousel-item w-full">
            <img src={`https://image.tmdb.org/t/p/original/${movies[2]?.poster_path}`} className="w-full rounded-xl h-72 object-cover" />
          </div> 
          <div id="item4" className="carousel-item w-full">
            <img src={`https://image.tmdb.org/t/p/original/${movies[3]?.poster_path}`} className="w-full rounded-xl h-72 object-cover" />
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