import axios from 'axios';
import React, { useEffect, useState } from 'react';
import QuickView from './QuickView';

const Row = ({fetchUrl, title}) => {
    const [programs, setPrograms] = useState([]);
    const [popup, setPopup] = useState(false);
    const [popupData, setPopupData] = useState([]);
    

    useEffect(() => {
        const getData = async () => {
            const request = await axios.get(fetchUrl)
            
            setPrograms(
                request.data.results
            )
        }
        getData();
    }, []);

    const handlePopUp = (e) => {
        popup ? setPopup(false) : setPopup(true);
        const result = programs.filter(movie => movie.backdrop_path === e.target.src.split('https://image.tmdb.org/t/p/original/').join(""));
        console.log(result);
        setPopupData(result);
    }

    return (
        <>
        {popup && <QuickView program={popupData[0]} setPopup={setPopup}/>}
                
        <div className="top-ten-container">
            <h2>{title}</h2>
            {
            title === "Top 10 movies and TV shows :" ? (
            programs
            .sort((a,b) => b.vote_average - a.vote_average)
            .slice(0,10)
            .map((program, index) => (
                
                <div className='top-ten-card' key={program.id} onClick={(e) => handlePopUp(e)}>
                    <img src={`https://image.tmdb.org/t/p/original/${program.backdrop_path}`} alt={program?.title || program?.original_title} />
                    
                </div>
              
                
            ))
            ) :(
                programs.map((program, index) => (
                    <div className='top-ten-card' key={index} onClick={(e) => handlePopUp(e)}>
                        <img src={`https://image.tmdb.org/t/p/original/${program.backdrop_path}`} alt={program?.title || program?.original_title} />
                    </div>
                )) 
            )}
        </div>
        </>
    );
};

export default Row;