import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Row from '../components/Row';
import requests from '../config/Req';

const TvShows = () => {
    return (
        <div>
            <Header />
            <Row  title='Popular TV shows now :' fetchUrl={requests.getPopularTvShow}/>
            <Row  title='Top Rated TV shows now :' fetchUrl={requests.getTopRatedTvShow}/>
            <Footer />
        </div>
    );
};

export default TvShows;