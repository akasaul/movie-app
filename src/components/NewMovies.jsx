import React from 'react'
import NewCard from './NewCard'
import {useEffect, useState} from "react";
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

const NewMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const res  = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=edf9f1037d7f378a1c1c94b65cea98d4");
      const data = await res.json();
      setMovies(data.results.filter((item) => item.release_date !== undefined));
      // (data.results);
      console.log(movies);
    }
    fetchMovies();
  }, []);
  return (
    <div>
       <div className='flex items-center justify-between px-16'>
        <h3 className='text-[1.1rem] my-2'>New Movies</h3>
        <span className='flex items-center cursor-pointer'>
          <p className='text-lightGray'>See All</p>
          <MdKeyboardArrowRight className='text-lightGray' />
        </span>
      </div>
      <div className='flex space-x-4 justify-center my-5'>
        {/* card  */}

        <div className="carousel carousel-center max-w-[90%] mx-auto p-4 space-x-4  rounded-box">
          {
            movies.map((movie, index) => (
              index < 8 &&
              <div className="carousel-item new-movie-carousel relative">
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="rounded-box h-72 w-72 object-cover" />
                <div className='flex absolute right-0 left-0 bottom-0 p-2 space-y-2 shadow-2xl flex-col justify-between space-x-2' style={{zIndex: 15}}>
                  <h3 className='text-[1rem] text-xl'>{movie?.title?.length > 15 ? `${movie?.title?.slice(0, 15)}..` : movie?.title}</h3>
                  <p className='p-0'>{movie?.release_date?.split("-")[0]}</p>
                  <div className='flex justify-between'>
                    <Link to={`/movie/${movie.id}`}>
                      <button className='p-1 px-5 bg-red rounded-full'>Watch</button>
                    </Link>
                    <button className='bg-black h-7 w-7 rounded-full '>+</button>
                  </div>
                </div>
              </div> 
            ))
          }          
      </div>



{/* 

        <NewCard img={movies[0]?.poster_path} title={movies[0]?.title} date={movies[0]?.release_date?.split(" ")[0]} rating={movies[0]?.vote_average} id={movies[0]?.id} />
        <NewCard img={movies[1]?.poster_path} title={movies[1]?.title} date={movies[1]?.release_date?.split(" ")[0]} rating={movies[1]?.vote_average} id={movies[1]?.id}/>
        <div className='hidden lg:block'>
        <NewCard img={movies[1]?.poster_path} title={movies[1]?.title} date={movies[1]?.release_date?.split(" ")[0]} rating={movies[1]?.vote_average} id={movies[1]?.id} />
        </div> */}
      </div>
    </div>
  )
}

export default NewMovies