import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import bgImage from '../assets/movie.jpg'
import Navbar from './Navbar';

function Hero() {

  const [query, setQuery] = useState("");


  return (
    <div className='h-[659px] pt-5  bg-hero-pattern bg-cover' style={{backgroundImage: `url(${bgImage})`}} >

          <div className='flex justify-center items-center bg-transparent h-20 text-white   '>
       <div className='flex  justify-center items-center overflow-hidden  gap-14 md:gap-[400px] lg:gap-[600px]'>
             <div className='logo'> 
                   <Link to={'/'}><p className='text-2xl font-bold text-red-600 sm:text-3xl lg:text-4xl cursor-pointer bg-gray-50 rounded-md px-2 py-2'>MOVIEASF</p></Link>
             </div>
             <div className='flex items-center gap-4 font-medium text-sm sm:text-base sm:gap-4  text-yellow-400 lg:text-lg lg:gap-10'>
                <Link to="/movies"><p className='cursor-pointer'>Popular</p></Link> 
                <Link to="/toprated"><p className='cursor-pointer'>Top Rated</p></Link> 
             </div>
       </div>

    </div>
        <div className='flex flex-col justify-center items-center pt-24 md:pt-24 lg:pt-24'>
           <div className='flex flex-col text-center text-white text-3xl mx-2 gap-4  lg:text-5xl'>
                <p className='font-bold'><span className='text-yellow-400'>Cinematic </span>Pleasure Awaits:</p>
                <p className='font-bold' >Stream the Magic, Feel the <span className='text-yellow-400'>Story</span>.</p>
                <p className='text-white text-base '>Welcome to your streaming escape!</p>
           </div>
         
           <div className='mt-10 flex flex-col justify-center  gap-4 items-center md:flex md:flex-row lg:flex lg:flex-row md:gap-0 lg:gap-0'>
                 <input className=' overflow-hidden w-[300px] md:w-[400px] lg:w-[500px] md:h-12 lg:h-12 px-4 py-2 outline-none rounded-s-sm' type="text" placeholder='Search......'
                  value={query} onChange={(event)=>setQuery(event.target.value)}
                 />
                 {query.trim() !== "" ? 
                 (<Link to={`/search/${query}`} ><p onClick={()=>setQuery(" ")} className='bg-red-600 py-3 px-4  text-white font-medium rounded-e-sm cursor-pointer'>Search > </p></Link>)
                 : (<p onClick={()=>setQuery("")} className='bg-red-600 py-3 px-4  text-white font-medium rounded-e-sm cursor-pointer'>Search > </p>)

                }
            
             </div>
           
        </div>
    </div>
  )
}

export default Hero