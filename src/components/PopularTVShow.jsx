import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TVCard from './TVCard';




function PopularTVShows() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
      const url = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTFmMGY4MjYxMTAzMDk1MTRiM2U5MjMxODY3NjE0ZSIsInN1YiI6IjY0ZDM1ZDZhMDM3MjY0MDBmZmZjN2M3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TpzrrzlL_IEwa7uovSoSWI_8fwByw8FbP0aCbMk_2Y0'
        }
      };
  
      axios.get(url, options)
        .then(response => {
          const slice = response.data.results.slice(0,10);
          setMovies(slice);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
    



  return (
    <>
    <div className=' bg-black py-10'>
    <p className='text-yellow-400 text-center pb-10 text-5xl font-bold '>Popular TV Shows</p>
    <div className='grid grid-cols-2 gap-5 px-5  justify-center md:px-20 lg:grid lg:grid-cols-5 lg:px-28'>
   
     {movies.map((movie)=>(
            <TVCard key={movie.id} movies={movie}/>
             
        ))}
        </div>
      
        
        </div>
       
       
</>

  )
}

export default PopularTVShows