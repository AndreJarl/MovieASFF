import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard';



function RecentMovieCard() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
      const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=011f0f826110309514b3e9231867614e";
      const options = {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer 011f0f826110309514b3e9231867614e'
        }
      };
  
      axios.get(url, options)
        .then(response => {
          const slice = response.data.results.slice(0,20);
          setMovies(slice);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);



  return (
    <>
    <div className=' bg-black py-10'>
    <p className='text-yellow-400 text-center pb-10 text-5xl font-bold '>Top Rated Movies</p>
    <div className='grid grid-cols-2 gap-5 px-5  justify-center md:px-20 lg:grid lg:grid-cols-5 lg:px-28'>
      {movies.map((movie)=>(
            <MovieCard key={movie.id} movies={movie}/>
        ))}

   
        </div>
       
      
        
        </div>
       
       
</>

  )
}

export default RecentMovieCard