import axios from 'axios';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';

// SRC
import Logo from '../assets/img/logoNit.png';
import ProfilMin from '../assets/img/miniature.png'
import requests from '../config/Req';

const Nav = () => {

    const [toggleResponsiveNav, setToggleResponsiveNav] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);
    const [searchBar, setSearchBar] = useState(false);
    const [blackNavBar, setBlackNavBar] = useState(false);
    const [getSearchResult, setGetSearchResult] = useState('');

    const navColorTransition = () => {
        window.scrollY >= 50 ? setBlackNavBar(true) : setBlackNavBar(false);
    }

    const getSearchedData = async (e) => {
        axios.get(requests.getMultiSearchList + `&query=?${e.target.value}&language=en-EN`)
        .then((res) => setGetSearchResult(res.data.results
            .filter(el => el.media_type == "movie" && el.backdrop_path !== null|| el.media_type == "tv" && el.backdrop_path !== null)));
        console.log(getSearchResult);
            
    };

    useEffect(() => {
        // getSearchedData();
        const changeWidth = () => {
            setLargeur(window.innerWidth)

            if(window.innerWidth > 500){
                setToggleResponsiveNav(false);
            }
        }

        window.addEventListener('resize', changeWidth);
        window.addEventListener('scroll', navColorTransition);

        // cleanup
        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    },[]);

    return (
        <div className={`nav ${blackNavBar && "nav-black"}`}>
            <ul>
                <NavLink to='/'>
                    <img src={Logo} alt='company-logo'/>
                </NavLink>
                <NavLink to='/'>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to='/movies'>
                    <li>Films</li>
                </NavLink>
                <NavLink to='/tvshows'>
                    <li>Séries</li>
                </NavLink>
                <NavLink to='/favorites'>
                    <li>Ma liste</li>
                </NavLink>
                <li className='responsive-item' onClick={() => setToggleResponsiveNav(!toggleResponsiveNav)}>
                    Pacourir&nbsp;<i className="fa-sharp fa-solid fa-caret-down"></i>
                </li>
            </ul>
            {toggleResponsiveNav && (
                <ul className='responsive-list'>
                    <li className='responsive-list-item'>Accueil</li>
                    <li className='responsive-list-item'>Films</li>
                    <li className='responsive-list-item'>Séries</li>
                    <li className='responsive-list-item'>Ma liste</li>
                </ul>
            )}
            {searchBar === false ? (
                <i className="fa-solid fa-magnifying-glass" onClick={() => setSearchBar(!searchBar)}></i>
            ) : (
                <div className='opened-search-bar'>
                    <input type="text" placeholder='search here ...' onChange={(e) => getSearchedData(e)}/>
                    <i className="fa-solid fa-magnifying-glass" onClick={() => setSearchBar(!searchBar)}></i>
                </div>
            )}
            <i class="fa-regular fa-bell"></i>
            <img src={ProfilMin} alt="" />
        </div>
    );
};

export default Nav;