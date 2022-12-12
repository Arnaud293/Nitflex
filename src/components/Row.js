import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Row = ({fetchUrl, title}) => {
    const [programs, setPrograms] = useState([]);
    const [popup, setPopup] = useState(false);
    console.log(title);

    useEffect(() => {
        const getData = async () => {
            const request = await axios.get(fetchUrl)
            
            setPrograms(
                request.data.results
            )
        }
        getData();
    }, []);
    return (
        <div className="top-ten-container">
            <h2>{title}</h2>
            {
            title === "Top 10 movies and TV shows :" ? (
            programs
            .sort((a,b) => b.vote_average - a.vote_average)
            .slice(0,10)
            .map((program, index) => (
                <div className='top-ten-card'>
                    <img src={`https://image.tmdb.org/t/p/original/${program.backdrop_path}`} alt={program?.title || program?.original_title} />
                </div>
            ))
            ) :(
                programs.map((program, index) => (
                    <div className='top-ten-card'>
                        <img src={`https://image.tmdb.org/t/p/original/${program.backdrop_path}`} alt={program?.title || program?.original_title} />
                    </div>
                )) 
            )}
        </div>
    );
};

export default Row;