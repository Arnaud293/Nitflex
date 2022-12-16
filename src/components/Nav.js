import axios from 'axios';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import requests from '../config/Req';

// SRC
import Logo from '../assets/img/logoNit.png';
import ProfilMin from '../assets/img/miniature.png'
import LogoMin from '../assets/img/logoMin.png';

const Nav = ({result, setResult}) => {

    const [toggleResponsiveNav, setToggleResponsiveNav] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);
    const [searchBar, setSearchBar] = useState(false);
    const [blackNavBar, setBlackNavBar] = useState(false);
    

    const navColorTransition = () => {
        window.scrollY >= 50 ? setBlackNavBar(true) : setBlackNavBar(false);
    }

    const getSearchedData = async (e) => {
        axios.get(requests.getMultiSearchList + `&query=?${e.target.value}&language=en-EN`)
        .then((res) => setResult(res.data.results
            .filter(el => el.media_type == "movie" && el.backdrop_path !== null|| el.media_type == "tv" && el.backdrop_path !== null)));
        console.log(result);
            
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
                    <img className='logo-min' src={LogoMin} alt='company-logo'/>
                </NavLink>
                <NavLink to='/'>
                    <li>Home</li>
                </NavLink>
                <NavLink to='/movies'>
                    <li>Movies</li>
                </NavLink>
                <NavLink to='/tvshows'>
                    <li>Tv shows</li>
                </NavLink>
                <NavLink to='/favorites'>
                    <li>Favorites</li>
                </NavLink>
                <li className='responsive-item' onClick={() => setToggleResponsiveNav(!toggleResponsiveNav)}>
                    Pacourir&nbsp;<i className="fa-sharp fa-solid fa-caret-down"></i>
                </li>
            </ul>
            {toggleResponsiveNav && (
                <ul className='responsive-list'>
                    <NavLink to='/' onClick={() => setToggleResponsiveNav(false)}>
                    <li className='responsive-list-item'>Home</li>
                    </NavLink>
                    <NavLink to='/movies' onClick={() => setToggleResponsiveNav(false)}>
                    <li className='responsive-list-item'>Movies</li>
                    </NavLink>
                    <NavLink to='/tvshows'onClick={() => setToggleResponsiveNav(false)}>
                    <li className='responsive-list-item'>Tv shows</li>
                    </NavLink>
                    <NavLink to='/favorites'onClick={() => setToggleResponsiveNav(false)}>
                    <li className='responsive-list-item'>Favorites</li>
                    </NavLink>
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
            <i className="fa-regular fa-bell"></i>
            <img src={ProfilMin} alt="" />
        </div>
    );
};

export default Nav;