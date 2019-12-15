import React from 'react';

import playCardIcon from '../../assets/images/play.svg';
import './MusicListDisplayCard.css';

const MusicListDisplayCard = props => {
    const { isArtist, itemData, coverSrc, onItemClick, deviceId, name, artistName } = props;
    
    return (
        <div className="display-card">
            <div className="item-image-link">
                <img className={`album-cover${isArtist? ' artist' : ''}`} src={coverSrc} alt="album cover"></img>
                <img 
                    className={`album-middle${isArtist? ' artist' : ''}`} 
                    src={playCardIcon} 
                    alt="album middle" 
                    onClick={() => {
                        isArtist? onItemClick(deviceId, itemData.uri) : onItemClick(deviceId, null, [itemData.uri]);
                }}></img>
            </div>
            <div className="item-name-link">
                <p className="track-name">{name}</p>
            </div>
            <div className="item-name-link">
                <p className="artist-name">{artistName}</p>
            </div>
        </div>
    );
};

export default MusicListDisplayCard;