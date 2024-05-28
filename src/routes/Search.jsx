import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import None from '../assets/no.png'
function Search() {

    const {query} = useParams();
   
    
    const [movies, setMovies] = useState([]);
    
    useEffect(()=>{
      const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTFmMGY4MjYxMTAzMDk1MTRiM2U5MjMxODY3NjE0ZSIsInN1YiI6IjY0ZDM1ZDZhMDM3MjY0MDBmZmZjN2M3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TpzrrzlL_IEwa7uovSoSWI_8fwByw8FbP0aCbMk_2Y0'
        }
      };
      
      fetch(url, options)
        .then(response => response.json())
        .then(response =>setMovies(response.results))
        .catch(err => console.error(err));
  }, [query]);
  
    console.log(query);
    console.log(movies);

    if(movies.length === 0){
       return (
        <div className='bg-black'>
 
        <Hero/>
         <p className='text-center text-3xl my-10 text-red-700'>{movies.length} results found for {query}.....</p>
         <div className='flex justify-center items-center pb-5'><img width={500} src={None} alt="" srcset="" /></div>
        <Footer/>    
            </div>
        )
    }

  return (
       <div className='bg-black'>
 
    <Hero/>
     <p className='text-center text-3xl my-10 text-red-700'>{movies.length} results found for {query}.....</p>
    <div className='grid grid-cols-2 gap-5 px-5  justify-center md:px-20 lg:grid lg:grid-cols-5 lg:px-28 pb-10'>
      {movies.map((movie)=>(
            <MovieCard key={movie.id} movies={movie}/>
        ))}
        </div>

    <Footer/>    
        </div>
  )
}

export default Search