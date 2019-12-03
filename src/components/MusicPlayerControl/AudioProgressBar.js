import React from 'react';

import ProgressBar from './ProgressBar';
import './AudioProgressBar.css';

const AudioProgressBar = props => {
    return (
        <div className="audio-progress-container">
            <div className="song-duration">
                <p>{props.currentDuration? props.currentDuration : '0:00'}</p>
            </div>
            <ProgressBar />
            <div className="song-duration">
                <p>{props.songDuration? props.songDuration : '0:00'}</p>
            </div>
        </div>
    );
};

export default AudioProgressBar;