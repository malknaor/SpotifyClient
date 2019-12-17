import React from 'react';

import './PlayerButton.css';

const PlayerButton = props => {
    return (
        <img className={props.cssClassName} src={props.src} alt={props.alt} onClick={() => {
            if (props.onClick) {
                props.onClick();
            }
        }}></img>
    );
};

export default PlayerButton;