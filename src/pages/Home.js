import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {

    const [getData, setGetData] = useState([]);


    const fetchData = () => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR`)
        .then((res) => setGetData(res.data));
        console.log(getData);
    }

    useEffect(() => {
        fetchData();
    },[])


    return (
        <div>
            HOME
        </div>
    );
};

export default Home;