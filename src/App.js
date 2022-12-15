import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import Favorites from './pages/Favorites';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SearchResult from './components/SearchResult';

const App = () => {
  const [getSearchResult, setGetSearchResult] = useState('');
  console.log(getSearchResult);
  // getSearchResult.length &&
  return (
    <div>
        
        <BrowserRouter>
          <Nav result={getSearchResult} setResult={setGetSearchResult} />
          {getSearchResult.length > 0 ? (
            <SearchResult result={getSearchResult} />
          ) :(
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/movies' element={<Movies />}/>
            <Route path='/tvshows' element={<TvShows />}/>
            <Route path='/favorites' element={<Favorites />}/>
          </Routes>)}
          <Footer />
        </BrowserRouter>
        
    </div>
  );
};

export default App;