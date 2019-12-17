import React from 'react';

import './TracksListItem.css';

const TracksListItem = props => {
    return (
        <li className="songs-list-item">
            <div className="item-start">
                <img className="song-cover" src={props.coverImg} alt="cover"></img>
            </div>
            <div className="item-middle">
                <div className="song-name-link">
                    <p className="track-name">{props.songName}</p>
                </div>
                <div className="song-name-link">
                    <p className="artist-name">{props.artistName}</p>
                </div>
            </div>
        </li>
    );
};

export default TracksListItem;