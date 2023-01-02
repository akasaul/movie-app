import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from "../components/Navbar";

const Details = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2]; 
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=edf9f1037d7f378a1c1c94b65cea98d4&language=en-US`);
      const data = await res.json();
      setMovie(data)
      console.log(data)
    }
    fetchDetails();
  }, [])
  return (
    <div>
      <Navbar />
      <div>
        <div className='bg-red mt-8 min-w-[350px] text-white h-[500px] w-[90%] p-5 rounded-3xl mx-auto bg-cover bg-norepeat bg-center' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`}}>
          <div className="flex space-x-3">
            <button className="p-2 text-center bg-slate-100/40 rounded-full px-5">Featured</button>
            <button className="p-2 text-center bg-slate-100/40 rounded-full px-5">4.2</button>
            <button className="p-2 text-center bg-slate-100/40 rounded-full px-5">1h 57m</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details