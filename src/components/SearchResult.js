import React, { useState } from 'react';
import QuickView from './QuickView';

const SearchResult = ({result}) => {

    const [popupData, setPopupData] = useState([]);
    const [popup, setPopup] = useState(false);

    const handleResultPopUp = (e) => {
        popup ? setPopup(false) : setPopup(true);
        const popped = result.filter(movie => movie.backdrop_path === e.target.src.split('https://image.tmdb.org/t/p/original/').join(""));
        setPopupData(popped);
    }

    return (
        <>
        <div className='search-result'>
            {result.map((program) => (
                <div className='search-result-card' onClick={(e) => handleResultPopUp(e)}>
                    <img src={`https://image.tmdb.org/t/p/original/${program.backdrop_path}`} alt="" />
                </div>
            ))}
        </div>
        {popup && <QuickView program={popupData[0]} setPopup={setPopup}/>}
        </>
    );
};

export default SearchResult;