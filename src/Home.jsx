import React from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero'
import PopularTVShows from './components/PopularTVShow'
import PopularMovieCard from './components/PopularMovieCard'
import RecentMovieCard from './components/RecentMovieCard'
function Home() {
  return (
    <>
   <Hero/>
   <PopularMovieCard/>
   <RecentMovieCard/>
   {/* <PopularTVShows/> */}
   <Footer/>
    </>
  )
}

export default Home