import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (

    <div className='flex justify-center items-center bg-transparent  text-white pt-5  '>
            <div className='flex  justify-center items-center overflow-hidden  gap-14 md:gap-[400px] lg:gap-[500px]'>
                <div className='logo'> 
                        <Link to='/'><p className='text-2xl font-bold text-red-600 sm:text-3xl lg:text-4xl cursor-pointer bg-gray-50 rounded-md px-2 py-2'>MOVIEASF</p></Link>
                </div>
                <div className='flex items-center gap-4 font-medium text-sm sm:text-base sm:gap-4  text-yellow-400 lg:text-lg lg:gap-10'>
                <Link to="/movies"><p className='cursor-pointer'>Popular</p></Link> 
                <Link to="/toprated"><p className='cursor-pointer'>Top Rated</p></Link> 
                </div>
            </div>
    </div>
  )
}

export default Navbar