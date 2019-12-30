import React from 'react';

import SpotifyWebPlayerScript from '../SpotifyWebPlayer/SpotifyWebPlayerScript';
import PlayerButtonsContainer from './PlayerButtonsContainer';
import AudioDurationProgressBar from './AudioDurationProgressBar';
import CurrentlyPlayingDisplay from './CurrentlyPlayingDisplay';
import VolumeControls from './VolumeControls';
import './MusicPlayerControls.css';

const MusicPlayerControls = props => {
    return (
        <div className="music-player">
            <div className="music-player__currently-played">
                <CurrentlyPlayingDisplay />
            </div>
            <div className="music-player__player-controls">
                <div className="player-controls__upper-container">
                    <PlayerButtonsContainer />
                </div>
                <div className="player-controls__lower-container">
                    <AudioDurationProgressBar />
                </div>
            </div>
            <div className="music-player__volume">
                <VolumeControls />
            </div>
            <SpotifyWebPlayerScript></SpotifyWebPlayerScript>
        </div>
    );
};

export default MusicPlayerControls;