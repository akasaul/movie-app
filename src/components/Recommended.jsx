import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Recommended = ({id}) => {
  const navigate = useNavigate();
  const [movies, setMovie] = useState([]);
  useEffect(() => {
    const fetchRecommedations = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=edf9f1037d7f378a1c1c94b65cea98d4&language=en-US&page=1`);
      const data  = await res.json();
        setMovie(data.results.filter((item) => item.backdrop_path != null || undefined));
    }

    fetchRecommedations();
  }, []);
  const refresh = (id) => {
    navigate(`/movie/${id}`)
    location.reload()
  }
  return (
    <>
      <div className='hidden md:block'>
        <h2 className='absolute bottom-[270px] left-[20px] text-[2rem] text-semibold'>Recommended</h2>
          <div className='position-absolute bottom-[20px] flex space-x-2 items-end'>
            {
              movies.map((item, index) => (
                index < 4 &&
                  <div className='h-56 p-2 flex flex-col justify-end items-center w-[16vw] lg:w-[18vw] bg-cover cursor-pointer rounded bg-no-repeat hover:h-72 hover:w-64 transition-all duration-300' style={{backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.73)),
                url(https://image.tmdb.org/t/p/original/${item?.backdrop_path})`}} onClick={() => refresh(item.id)} >
                  <h3 className='text-xl z-10'>{item?.title}</h3> 
                </div>
              ))
            }
        </div>
      </div>
      
      <div className='md:hidden w-[90%] mx-auto'>
        <h1 className='text-[2rem] my-2 px-5'>Recommended</h1>
        <div className='gap-2 grid grid-flow-row grid-cols-2 sm:grid-cols-3'>
          {
            movies.map((item, index) => (
              index < 4 &&
                <div className='h-56 min-w-[120px] bg-cover p-3 flex flex-col items-center justify-end cursor-pointer rounded-xl bg-no-repeat' style={{backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.73)),
              url(https://image.tmdb.org/t/p/original/${item?.backdrop_path})`}} onClick={() => refresh(item.id)} >
                <h3 className='text-xl z-10'>{item?.title}</h3> 
              </div>
            ))
          }
        </div>

      </div>
    </>

  )
}

export default Recommended