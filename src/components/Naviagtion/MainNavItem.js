import React from 'react';
import { Link } from 'react-router-dom';

import './MainNavItem.css';

const MainNavItem = props => {
    return (
        <Link className="main-nav__link" to={props.redirectTo}>
            <img className="main-nav__icon" src={props.iconSrc} alt={props.itemLabel}></img>
            <p className="main-nav__label">{props.itemLabel}</p>
        </Link>
    );
};

export default MainNavItem;