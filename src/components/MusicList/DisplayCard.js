import React from 'react';
import { Link } from 'react-router-dom';

import './DisplayCard.css';

const DisplayCard = props => {
    return (
        <div className="display-card">
            <Link className="item-image-link" to="/">
                <img className={`album-cover${props.isArtist? ' artist' : ''}`} src={props.coverSrc} alt="album cover"></img>
                <img className={`album-middle${props.isArtist? ' artist' : ''}`} src={require('../../assets/images/play.svg')} alt="album middle"></img>
            </Link>
            <Link className="item-name-link" to={`/`}>
                <p className="track-name">{props.name}</p>
            </Link>
            <Link className="item-name-link" to={`/`}>
                <p className="artist-name">{props.artistName}</p>
            </Link>
        </div>
    );
};

export default DisplayCard;