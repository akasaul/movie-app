import React from 'react'
import NewCard from './NewCard'
import {useEffect, useState} from "react";
import { MdKeyboardArrowRight } from 'react-icons/md';

const NewMovies = () => {
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
       <div className='flex items-center justify-between'>
        <h3 className='text-[1.1rem] my-2'>New Movies</h3>
        <span className='flex items-center cursor-pointer'>
          <p className='text-lightGray'>See All</p>
          <MdKeyboardArrowRight className='text-lightGray' />
        </span>
      </div>
      <div className='flex space-x-4 justify-center my-5'>
        <NewCard img={movies[0]?.poster_path} title={movies[0]?.title} date={movies[0]?.release_date.split(" ")[0]} rating={movies[0]?.vote_average} />
        <NewCard img={movies[1]?.poster_path} title={movies[1]?.title} date={movies[1]?.release_date.split(" ")[0]} rating={movies[1]?.vote_average} />
        <div className='hidden md:block'>
        <NewCard img={movies[1]?.poster_path} title={movies[1]?.title} date={movies[1]?.release_date.split(" ")[0]} rating={movies[1]?.vote_average} />
        </div>
      </div>
    </div>
  )
}

export default NewMovies