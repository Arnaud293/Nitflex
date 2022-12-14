import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import Favorites from './pages/Favorites';

const App = () => {
  
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/movies' element={<Movies />}/>
            <Route path='/tvshows' element={<TvShows />}/>
            <Route path='/favorites' element={<Favorites />}/>
          </Routes>
        </BrowserRouter>
        
    </div>
  );
};

export default App;