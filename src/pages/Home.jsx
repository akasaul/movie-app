import React from 'react'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
import Movies from '../components/Movies'
import Navmobile from "../components/Navmobile";
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { login } from '../features/userSlice';

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