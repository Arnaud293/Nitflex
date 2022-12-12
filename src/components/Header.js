import React, { useEffect, useRef, useState } from 'react';
import Nav from './Nav';
import requests from '../config/Req';
import axios from 'axios';

const Header = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const request = await axios.get(requests.getTrending)
            
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
        }
        getData();
    }, []);

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
           
        </div>
    );
};

export default Header;