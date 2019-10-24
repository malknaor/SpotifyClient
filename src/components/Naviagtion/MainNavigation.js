import React from 'react';

import './Navigation.css';

const MainNavigation = () => {
    return (
        <div className="main-navbar">
                <div className="header">
                    <img className="spotify-logo" src={require('../../resources/spotify.svg')} alt="spotify-logo"></img>
                    <h1 className="spotify-label">Spotify</h1>
                </div>
                <ul className="nav-list">
                    <li className="list-item">
                        <a className="nav-link" href="#">
                            <img className="home-icon" src={require('../../resources/home.svg')} alt="home-icon"></img>
                            Home
                        </a>
                    </li>
                    <li className="list-item">
                        <a className="nav-link" href="#">
                            <img className="search-icon" src={require('../../resources/search.svg')} alt="search-icon"></img>
                            Search
                        </a>
                    </li>
                    <li className="list-item">
                        <a className="nav-link" href="#">
                            <img className="library-icon" src={require('../../resources/library.svg')} alt="library-icon"></img>
                            My Library
                        </a>
                    </li>
                </ul>
                <div className="footer">
                    <img alt="user photo"></img>
                    User Name
                </div>
        </div>
    );
};

export default MainNavigation;