import React from 'react'

function MovieVideo({id}) {
  return (
    <div> 
   
        <div className='flex justify-center items-center py-5'>
                <iframe
          className='w-4/5 aspect-video'
          src={`https://autoembed.co/movie/tmdb/${id}`}
     //https://autoembed.co/movie/tmdb/385687
          allowFullScreen  // Enable fullscreen mode
          allow="autoplay; fullscreen"  // Allow autoplay and fullscreen
        ></iframe>

        </div>
   
    </div>
  )
}

export default MovieVideo
