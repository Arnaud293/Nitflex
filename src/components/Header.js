import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import requests from '../config/Req';
import axios from 'axios';
import TopTenTrendings from './TopTenTrendings';

const Header = () => {

    const [movie, setMovie] = useState([]);
    const [trendings, setTrendings] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const request = await axios.get(requests.getTrending)
            
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            setTrendings(
                request.data.results
            )
        }
        getData();
    }, []);
    console.log(movie)
    console.log(trendings);

    const background = {
        backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundSize : "cover",
        backgroundPosition: "center",
    }

    return (
        <div className='header' style={background}>
            <Nav />
            <div className="banner-infos-container">
                <h1>{movie?.original_title || movie?.title}</h1>
                <p>{movie?.overview}</p>
                <div className="btn-container">
                    <button className='play-btn'><i className="fa-solid fa-play"></i>&nbsp;Lecture</button>
                    <button className='infos-btn'><i className="fa-solid fa-circle-info"></i>&nbsp;Plus d'infos</button>
                </div>
            </div>
            <div className="top-ten-container">
                {trendings
                .sort((a,b) => b.vote_average - a.vote_average)
                .slice(0,10)
                .map((trending) => (
                    <TopTenTrendings trending={trending} key={trending.id} />
                ))}
            </div>
        </div>
    );
};

export default Header;