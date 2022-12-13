import React from 'react';

const QuickView = ({program}) => {
    return (
        <div className='quick-view'>
            <div className="quick-view-container">
                <div className="quick-view-container-img">
                    <img src={`https://image.tmdb.org/t/p/original/${program.backdrop_path}`} alt={program?.title || program?.original_title} />
                    <h1>{program.title}</h1>
                    <div className="quick-view-btn">
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                </div>
                <div className="quick-view-container-infos">

                </div>

            </div>
        </div>
    );
}; 

export default QuickView;