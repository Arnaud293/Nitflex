import React from 'react';

const ProgramsCard = ({program, index}) => {
    return (
        <div className='top-ten-card'>
            <img src={`https://image.tmdb.org/t/p/original/${program.backdrop_path}`} alt={program?.title || program?.original_title} />
        </div>
    );
};

export default ProgramsCard;