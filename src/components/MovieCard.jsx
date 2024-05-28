import React from 'react'
import { Link } from 'react-router-dom'

function MovieCard({movies}) {
  return (
    <div>
       <Link to={`/movieinfo/${movies.id}`}>
             <div className='cursor-pointer' key={movies.id}>
                <img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt="" />
               {/* <p className='w-full text-white  overflow-ellipsis  line-clamp-2'>  {movie.title}</p> */}
             </div>
             </Link>
    </div>
  )
}

export default MovieCard