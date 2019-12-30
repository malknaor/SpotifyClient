import React from 'react';

import { limitTitle } from '../../utils/jsUtils';
import playCardIcon from '../../assets/images/play.svg';
import './MusicListDisplayCard.css';

const MusicListDisplayCard = props => {
    const { isArtist = false, itemData, coverSrc, onItemClick, deviceId, name, artistName, intervalId } = props;
    
    return (
        <div className="display-card">
            <div className="item-image-link">
                <img className={`album-cover${isArtist? ' artist' : ''}`} src={coverSrc} alt="album cover"></img>
                <img 
                    className={`album-middle${isArtist? ' artist' : ''}`} 
                    src={playCardIcon} 
                    alt="album middle" 
                    onClick={() => { 
                        let newIntervalId = intervalId || setInterval(props.incTrackCurrentDuration, 1000);

                        if (isArtist) {
                            onItemClick(deviceId, itemData.uri, null, newIntervalId);
                        } else {
                            let trackUri = itemData.uri || itemData.track.uri;

                            onItemClick(deviceId, null, [trackUri], newIntervalId);
                        }
                }}></img>
            </div>
            <div className="item-name-link">
                <p className="track-name">{limitTitle(name)}</p>
            </div>
            <div className="item-name-link">
                <p className="artist-name">{limitTitle(artistName)}</p>
            </div>
        </div>
    );
};

export default MusicListDisplayCard;