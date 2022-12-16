import React, { useEffect, useRef, useState } from 'react';
import requests from '../config/Req';
import axios from 'axios';
import QuickView from './QuickView';

const Header = () => {

    const [movie, setMovie] = useState([]);
    const [popup, setPopup] = useState(false);

    const handleBannerPopUp = () => {
        popup ? setPopup(false) : setPopup(true);
    }

    useEffect(() => {
        const getData = async () => {
            const request = await axios.get(requests.getTrending)
            
            setMovie(
                request.data.results.filter(el => el.backdrop_path !== null)[
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

            <div className="banner-infos-container">
                <h1>{movie?.original_title || movie?.title}</h1>
                <p>{movie?.overview}</p>
                <div className="btn-container">
                    <button className='play-btn'><i className="fa-solid fa-play"></i>&nbsp;Lecture</button>
                    <button className='infos-btn' onClick={() => handleBannerPopUp()}><i className="fa-solid fa-circle-info"></i>&nbsp;Plus d'infos</button>
                </div>
                {popup && <QuickView program={movie} setPopup={setPopup}/>}
            </div>
           
        </div>
    );
};

export default Header;