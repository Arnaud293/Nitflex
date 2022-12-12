import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProgramsCard from './ProgramsCard';
import TopTenTrendings from './TopTenTrendings';

const Row = ({fetchUrl, title}) => {
    const [programs, setPrograms] = useState([]);
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
                <TopTenTrendings trending={program} key={program.id} index={index}/>
            ))
            ) :(
                programs.map((program, index) => (
                    <ProgramsCard program={program} key={program.id} index={index}/>
                )) 
            )}
        </div>
    );
};

export default Row;