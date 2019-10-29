import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/Navigation.css';

const SubNavigation = () => {
    return (
        <div className="sub-navbar">
        <ul className="nav-list">
            <li className="nav-item">
                <Link className="nav-link" to="/">
                    Featured
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/">
                    Charts
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/">
                    Podcasts
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/">
                    Genres and Mood
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/">
                    New Releases
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/">
                    Discover
                </Link>
            </li>
        </ul>
    </div>
    );
};  

export default SubNavigation;