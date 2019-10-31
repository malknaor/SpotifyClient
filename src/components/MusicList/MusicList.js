import React from 'react';

import '../../css/MusicList.css';

const MusicList = props => {
    return (
        <div className="list-wrapper">
            <h2 className="list-title">{props.title}</h2>
            <ul className="music-list">
                {props.children}
            </ul>
        </div>
    );
};

export default MusicList;