import React from 'react';
import { Link } from 'react-router-dom';

import './SongsListItem.css';

const SongsListItem = props => {
    return (
        <li className="songs-list-item">
            <div className="item-start">
                <img className="song-cover" src={props.coverImg} alt="cover"></img>
            </div>
            <div className="item-middle">
                <Link className="song-name-link" to={`/`}>
                    <p className="track-name">{props.songName}</p>
                </Link>
                <Link className="song-name-link" to={`/`}>
                    <p className="artist-name">{props.artistName}</p>
                </Link>
            </div>
        </li>
    );
};

export default SongsListItem;