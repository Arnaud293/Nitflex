import React from 'react';

const TopTenTrendings = ({trending}) => {
    // let trendIndex = trending.indexOf(trending);
    
    return (
        <div className='top-ten-card'>
            <span>1</span>
            <img src={`https://image.tmdb.org/t/p/original/${trending.backdrop_path}`} alt="" />
        </div>
    );
};

export default TopTenTrendings;