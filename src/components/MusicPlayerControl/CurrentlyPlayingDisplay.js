import React from 'react';
import { connect } from 'react-redux';

import './CurrentlyPlayingDisplay.css';

const CurrentlyPlayingDisplay = props => {
    const { currentTrackData } = props;

    if (currentTrackData) {
        return (
            <div className="currently-playing-container">
                <img className="track-cover" src={currentTrackData.album.images[0].url} alt="track-cover"></img>
                <div className="track-details">
                    <div className="track-sub-details">
                        <p className="track-name">{currentTrackData.name}</p>
                    </div>
                    <div className="track-sub-details">
                        <p className="artist-name">{currentTrackData.artists[0].name}</p>
                    </div>
                </div>
            </div>
        );
    }

    return null;
};

const mapStateToProps = state => {
    return { currentTrackData: state.player.currentTrackData }
};

export default connect(mapStateToProps)(CurrentlyPlayingDisplay);