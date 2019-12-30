import React from 'react';
import { connect } from 'react-redux';

import { limitTitle } from '../../utils/jsUtils';
import './CurrentlyPlayingDisplay.css';

const CurrentlyPlayingDisplay = props => {
    const { currentTrackData } = props;

    if (currentTrackData) {
        return (
            <div className="currently-playing-container">
                <img className="track-cover" src={currentTrackData.album.images[0].url} alt="track-cover"></img>
                <div className="track-details">
                    <div className="track-sub-details">
                        <p className="track-name">{limitTitle(currentTrackData.name, 20)}</p>
                    </div>
                    <div className="track-sub-details">
                        <p className="artist-name">{limitTitle(currentTrackData.artists[0].name)}</p>
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