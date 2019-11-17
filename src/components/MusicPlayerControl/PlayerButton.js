import React from 'react';

import '../../css/MusicPlayerControls.css';

const PlayerButton = props => {
    return (
        <li className="music-player__item">
            <img className={props.cssClassName} src={props.src} alt={props.alt} onClick={() => {
                if (props.onClick) {
                    props.onClick();
                }
            }}></img>
        </li>
    );
};

export default PlayerButton;