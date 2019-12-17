import React from 'react';
import { connect } from 'react-redux';

import SpotifyWebPlayerScript from '../SpotifyWebPlayer/SpotifyWebPlayerScript';
import PlayerButtonsContainer from './PlayerButtonsContainer';
import AudioDurationProgressBar from './AudioDurationProgressBar';
import CurrentlyPlayingDisplay from './CurrentlyPlayingDisplay';
import './MusicPlayerControls.css';

const MusicPlayerControls = props => {
    const { player } = props;

    return (
        <div className="music-player">
            <SpotifyWebPlayerScript></SpotifyWebPlayerScript>
            <div className="music-player__currently-played">
                <CurrentlyPlayingDisplay currentTrack={player.currentTrack} />
            </div>
            <div className="music-player__player-controls">
                <div className="player-controls__upper-container">
                    <PlayerButtonsContainer />
                </div>
                <div className="player-controls__lower-container">
                    <AudioDurationProgressBar currentTrack={player.currentTrack} />
                </div>
            </div>
            <div className="music-player__volume">
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return { player: state.player }
};

export default connect(mapStateToProps)(MusicPlayerControls);