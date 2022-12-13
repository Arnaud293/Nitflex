import React from 'react';

const QuickView = ({program, setPopup}) => {
    return (
        <div className='quick-view'>
            <div className="quick-view-container">
                <div className="quick-view-container-img">
                    <i className="fa-solid fa-xmark" onClick={() => setPopup(false)}></i>
                    <img src={`https://image.tmdb.org/t/p/original/${program.backdrop_path}`} alt={program?.title || program?.original_title} />
                    <h1>{program.title}</h1>
                    <div className="quick-view-btn">
                        <button className='play-btn'><i className="fa-solid fa-play"></i>&nbsp;Lecture</button>
                        <button className='circle-btn'><i className="fa-solid fa-plus"></i></button>
                        <button className='circle-btn'><i className="fa-sharp fa-solid fa-thumbs-up"></i></button>
                    </div>
                </div>
                <div className="quick-view-container-infos">

                </div>

            </div>
        </div>
    );
}; 

export default QuickView;