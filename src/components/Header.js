import React, { useEffect, useState } from 'react';
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
    console.log(movie)

    return (
        <div className='header'>
            <Nav />
        </div>
    );
};

export default Header;