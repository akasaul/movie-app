import React from 'react'
import {useState, useEffect} from "react";
import NewCard from './NewCard';
import TopRatedCard from './TopRatedCard';
import { MdKeyboardArrowRight } from 'react-icons/md';

const TopRated = () => {
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
            <div className='flex items-center space-x-2'>
                <h3 className='text-[1.1rem] my-5'>Top Rated</h3>
                <img className='object-contain h-4 p-0' src="https://upload.wikimedia.org/wikipedia/donate/thumb/4/44/YellowStar.svg/424px-YellowStar.svg.png?20160715211119" alt="" />
            </div>
            <span className='flex items-center cursor-pointer'>
                <p className='text-lightGray'>See All</p>
                <MdKeyboardArrowRight className='text-lightGray' />
            </span>
        </div>
        <div className='flex space-x-4 justify-center'>
            <TopRatedCard img={movies[0]?.poster_path} rating={movies[0]?.vote_average} date={movies[0]?.release_date} title={movies[0]?.title} />
            <TopRatedCard img={movies[0]?.poster_path} rating={movies[0]?.vote_average} date={movies[0]?.release_date} title={movies[0]?.title} />
            <div className='hidden md:block'>
                <TopRatedCard img={movies[0]?.poster_path} rating={movies[0]?.vote_average} date={movies[0]?.release_date} title={movies[0]?.title} />
            </div>
        </div>
    </div>
  )
}

export default TopRated