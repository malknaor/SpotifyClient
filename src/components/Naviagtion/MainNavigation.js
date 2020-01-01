import React from 'react';
import { Link } from 'react-router-dom';

import MainNavItem from './MainNavItem';
import './MainNavigation.css';

const MainNavigation = props => {
    return (
        <div className="main-navbar">
            <div className="main-navbar__header">
                <img className="spotify-logo" src={require('../../assets/images/spotify.svg')} alt="spotify-logo"></img>
                <h2 className="spotify-label">Spotify</h2>
            </div>
            <div className="main-navbar__content">
                <ul className="main-nav-list">
                    <li className="list-item">
                        <MainNavItem redirectTo={'/'} iconSrc={require('../../assets/images/home.svg')} itemLabel={'Home'} />
                    </li>
                    <li className="list-item">
                        <MainNavItem redirectTo={'/search'} iconSrc={require('../../assets/images/search.svg')} itemLabel={'Search'} />
                    </li>
                    <li className="list-item">
                        <MainNavItem redirectTo={'/mylibrary'} iconSrc={require('../../assets/images/library.svg')} itemLabel={'My Library'} />
                    </li>
                </ul>
            </div>
            <div className="main-navbar__footer">
                <Link className="nav-link" to="/user">
                    <img className="user-pic" src={props.user.images[0].url} alt="spotify-logo"></img>
                    <p className="user-name">{props.user.display_name}</p>
                </Link>
            </div>
        </div>
    );
};

export default MainNavigation;