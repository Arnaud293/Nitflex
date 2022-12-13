import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Row from '../components/Row';
import requests from '../config/Req';

const Home = () => {

    return (
        <div>
            <Header />
            <Row  title='Top 10 movies and TV shows :' fetchUrl={requests.getTrending}/>
            <Row  title='Popular movies now :' fetchUrl={requests.getPopularMovies}/>
            <Row  title='Popular TV shows now :' fetchUrl={requests.getPopularTvShow}/>
            <Row  title='Top Rated TV shows now :' fetchUrl={requests.getTopRatedTvShow}/>
            <Footer />
        </div>
    );
};

export default Home;