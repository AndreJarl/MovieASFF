import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import TVShows from './routes/TVShows';
import MovieInfoPage from './routes/MovieInfoPage';
import TVInfoPage from './routes/TVInfoPage';
import Search from './routes/Search';
import PopularMoviesPage from './routes/PopularMoviesPage';
import TopRatedPage from './routes/TopRatedPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<PopularMoviesPage />} />
      <Route path="/toprated" element={<TopRatedPage />} />
      <Route path="/movieinfo/:id" element={<MovieInfoPage />} />
      <Route path="/tvshowinfo/:id" element={<TVInfoPage />} />
      <Route path="/search/:query" element={<Search />} />
    </Routes>
  );
}

export default App;
