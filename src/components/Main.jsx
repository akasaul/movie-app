import React from 'react'
import Navbar from './Navbar'
import Trending from './Trending'
import NewMovies from './NewMovies'
import TopRated from './TopRated'
import {useState, useEffect} from "react";

const Main = () => {

  return (
    <div className="flex-1 min-h-[200vh]">
      <Navbar />
      <Trending />
      <NewMovies />
      <TopRated />
    </div>
  )
}

export default Main