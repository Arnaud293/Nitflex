import React from 'react';

const TopTenTrendings = ({trending, index}) => {
    return (
        <div className='top-ten-card'>
            <img src={`https://image.tmdb.org/t/p/original/${trending.backdrop_path}`} alt={trending?.title || trending?.original_title} />
        </div>
    );
};

export default TopTenTrendings;