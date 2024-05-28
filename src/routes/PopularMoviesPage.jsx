import React, { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BsArrowLeft, BsArrowRight} from 'react-icons/bs';


function PopularMoviesPage() {

    const [movies, setMovies] = useState([]);
    
    const [count, setCount] = useState(1);


    const AddCount = () => {
      setCount( count => count + 1)
   }
 
   const MinusCount = () => {
     setCount((count)=> (count > 1 ? count-1 : count))
  }

  
    useEffect(() => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTFmMGY4MjYxMTAzMDk1MTRiM2U5MjMxODY3NjE0ZSIsInN1YiI6IjY0ZDM1ZDZhMDM3MjY0MDBmZmZjN2M3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TpzrrzlL_IEwa7uovSoSWI_8fwByw8FbP0aCbMk_2Y0'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${count}`, options)
        .then(response => response.json())
        .then(response => setMovies(response.results))
        .catch(err => console.error(err));
    }, [count]);

    
  
    return (
      <div className='bg-black'>
      
      <Navbar />
      <div className=' bg-black py-10'>
      <p   className='text-yellow-400 text-center pb-10 text-5xl font-bold '>Popular</p>
      <div className='grid grid-cols-2 gap-5 px-5  justify-center md:px-20 lg:grid lg:grid-cols-5 lg:px-28'>
        {movies.map((movie)=>(
              <MovieCard key={movie.id} movies={movie}/>
          ))}
  
     
          </div>
         
        
          
          </div>
          <div className='flex justify-center items-center mx-auto my-9 gap-1'>
          <button className='bg-gray-700 px-5 flex items-center gap-3 hover:bg-slate-500' onClick={MinusCount}> <BsArrowLeft />PREV PAGE</button>
          <button className='bg-gray-700 px-5  flex items-center gap-3 hover:bg-slate-500' onClick={AddCount}>NEXT PAGE <BsArrowRight /></button>
        </div>
       <Footer/>  
  </div>
    
    )
}

export default PopularMoviesPage