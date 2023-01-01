import React from 'react'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
import Movies from '../components/Movies'
import Navmobile from "../components/Navmobile";

const Home = () => {
  return (
    <div className='flex justify-between'>
        <Sidebar />
        <Main />
        <Movies />
        <Navmobile />
    </div>
  )
}

export default Home