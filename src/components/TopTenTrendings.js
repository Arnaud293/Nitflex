import React from 'react';

const TopTenTrendings = ({trending, index}) => {
    // let trendIndex = trending.indexOf(trending);
    console.log(index);
    return (
        <div className='top-ten-card'>
            <span>{index + 1}</span>
            <img src={`https://image.tmdb.org/t/p/original/${trending.backdrop_path}`} alt="" />
        </div>
    );
};

export default TopTenTrendings;