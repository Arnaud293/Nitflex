import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

// SRC
import Logo from '../assets/img/logoNit.png';

const Nav = () => {

    const [toggleResponsiveNav, setToggleResponsiveNav] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);
    const [searchBar, setSearchBar] = useState(false);
    const [blackNavBar, setBlackNavBar] = useState(false);

    const navColorTransition = () => {
        window.scrollY >= 50 ? setBlackNavBar(true) : setBlackNavBar(false);
    }

    useEffect(() => {

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
                <NavLink>
                    <li>Séries</li>
                </NavLink>
                <NavLink>
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
                    <input type="text" placeholder='search here ...'/>
                    <i className="fa-solid fa-magnifying-glass" onClick={() => setSearchBar(!searchBar)}></i>
                </div>
            )}
        </div>
    );
};

export default Nav;