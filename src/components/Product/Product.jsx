import React, { useEffect, useState } from 'react'
import Header from '../Header/Header.jsx'
import axios from 'axios'
export default function Product() {
  let [movies, setMoveis] = useState([])
  async function getTrendingMovies() {
    let { data } = await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=f98677ffae088b77d44422428ce660b3');
    setMoveis(data.results);
  }
  
  useEffect(() => {
    getTrendingMovies()
  }, [])
  return (
    <div>
      <Header
        title="Trending News"
        desc=""
        height="75" />
   
    </div>

  )
}
