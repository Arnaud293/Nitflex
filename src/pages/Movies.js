import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Row from '../components/Row';
import requests from '../config/Req';

const Movies = () => {
    return (
        <div>
            <Header />
            <Row  title='Popular movies now :' fetchUrl={requests.getPopularMovies}/>
            <Row  title='Top rated Movies now :' fetchUrl={requests.getTopRatedMovies}/>
            <Footer />
        </div>
    );
};

export default Movies;