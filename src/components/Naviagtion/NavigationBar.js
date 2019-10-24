import React from 'react';

import './Navigation.css';

const NavigationBar = props => {
    return (
        <div className="navbar">
            {props.children}
        </div>
    );
};

export default NavigationBar;