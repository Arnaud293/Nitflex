import React, { useEffect, useState } from 'react';

// SRC
import Logo from '../assets/img/logoNit.png';

const Nav = () => {

    const [toggleResponsiveNav, setToggleResponsiveNav] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);
    const [searchBar, setSearchBar] = useState(false);

    useEffect(() => {

        const changeWidth = () => {
            setLargeur(window.innerWidth)

            if(window.innerWidth > 500){
                setToggleResponsiveNav(false);
            }
        }

        window.addEventListener('resize', changeWidth);

        // cleanup
        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    },[])

    return (
        <div className="nav">
            <ul>
                <img src={Logo} alt='company-logo'/>
                <li>Accueil</li>
                <li>Films</li>
                <li>Séries</li>
                <li>Ma liste</li>
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