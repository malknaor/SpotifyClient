import React from 'react';
import { Link } from 'react-router-dom';

import './MainNavigation.css';

const MainNavigation = props => {
    return (
        <div className="main-navbar">
                <div className="header">
                    <img className="spotify-logo" src={require('../../assets/images/spotify.svg')} alt="spotify-logo"></img>
                    <h2 className="spotify-label">Spotify</h2>
                </div>
                <ul className="nav-list">
                    <li className="list-item">
                        <Link className="nav-link" to="/">
                            <img className="home-icon" src={require('../../assets/images/home.svg')} alt="home-icon"></img>
                            Home
                        </Link>
                    </li>
                    <li className="list-item">
                        <Link className="nav-link" to="/search">
                            <img className="search-icon" src={require('../../assets/images/search.svg')} alt="search-icon"></img>
                            Search
                        </Link>
                    </li>
                    <li className="list-item">
                        <Link className="nav-link" to="/mylibrary">
                            <img className="library-icon" src={require('../../assets/images/library.svg')} alt="library-icon"></img>
                            My Library
                        </Link>
                    </li>
                </ul>
                <div className="footer">
                    <Link className="nav-link" to="/user">
                        <img className="user-pic" src={props.user.images[0].url} alt="spotify-logo"></img>
                        <p className="user-name">{props.user.display_name}</p>
                    </Link>
                </div>
        </div>
    );
};

export default MainNavigation;