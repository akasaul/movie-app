import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Recommended = ({id}) => {
  const navigate = useNavigate();
  const [movies, setMovie] = useState([]);
  useEffect(() => {
    const fetchRecommedations = async () => {
      const res = await fetch(`
      https://api.themoviedb.org/3/tv/${id}/similar?api_key=edf9f1037d7f378a1c1c94b65cea98d4&language=en-US&page=1`);
      const data  = await res.json();
        setMovie(data.results.filter((item) => item.backdrop_path != null || undefined));
    }

    fetchRecommedations();
  }, []);
  const refresh = (id) => {
    navigate(`/tv/${id}`)
    location.reload()
  }
  return (
    <>
      <h2 className='absolute bottom-[270px] left-[20px] text-[2rem] text-semibold'>Recommended</h2>
        <div className='position-absolute bottom-[20px] flex space-x-2 items-end'>
          {
            movies.map((item, index) => (
              index < 4 &&
                <div className='h-56 w-[16vw] lg:w-[18vw] bg-cover cursor-pointer rounded bg-no-repeat hover:h-72 hover:w-64 transition-all duration-300' style={{backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.73)),
              url(https://image.tmdb.org/t/p/original/${item?.backdrop_path})`}} onClick={() => refresh(item.id)} >
                <h3 className='text-2xl opacity-0 hover:opacity-1 transition-all z-10 duration-300'>{item?.title}</h3> 
              </div>
            ))
          }
      </div>
    </>
  )
}

export default Recommended