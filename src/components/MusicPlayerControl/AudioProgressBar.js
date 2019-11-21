import React from 'react';

import './AudioProgressBar.css';

class AudioProgressBar extends React.Component {
    render() {
        return (
            <div className="audio-progress-container">
                <div className="song-duration">
                    <p>00:00:00</p>
                </div>
                <div className="progress-container">
                    <div className="draggable-point"></div>
                </div>
                <div className="song-duration">
                    <p>00:00:00</p>
                </div>
            </div>
        );
    }
}

export default AudioProgressBar;