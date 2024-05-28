import React from 'react'
import { AiFillStar } from 'react-icons/ai';

function TVInfo({infos}) {
  return (
    
    <div key={infos.id}  className='flex flex-col  px-5 justify-center items-center bg-black text-white md:flex md:flex-row md:py-10 lg:pt-20 lg:pb-20' >
        <div className='flex justify-center items-center px-5 pt-9 lg:pt-0'>
        <img className='w-full md:w-60 lg:w-[300px]' src={`https://image.tmdb.org/t/p/w500/${infos.poster_path}`} alt="" />
        </div>
        <div>
            <div className='flex flex-col justify-center items-center mt-2'>
                <p className='mb-5 text-4xl font-bold text-left md:text-left md:text-2xl lg:w-[500px] lg:text-4xl'>{infos.original_name}</p>
              
                <div className='flex gap-4 justify-start'>
                    {infos.genres.map((genre)=>(
                        <div className=' rounded-lg flex justify-center  text-yellow-400 '>
                            <p className='text-xs'>{genre.name} </p>
                        </div>
                ))}
                </div>
                <p className=' mx-4 mt-3 text-lg md:text-base md:w-[400px] lg:text-base lg:w-[500px]'>{infos.overview}</p>
                </div>
              
                <div className='mx-4 flex gap-2 text-yellow-400 py-4 ml-7'>
                  <p className='border rounded px-2 md:text-xs'>{infos.status}</p>
                  <p className='border rounded px-2 md:text-xs  flex items-center gap-1'><AiFillStar/> {infos.vote_average}</p>
                  <p className='border rounded px-2 md:text-xs'> {infos.origin_country}</p>
                </div>
           
            
        </div>
    </div>
   
  )
}

export default TVInfo