import React from 'react';

import PlayerButtonsContainer from './PlayerButtonsContainer';
import AudioProgressBar from './AudioProgressBar';
import './MusicPlayerControls.css';

class MusicPlayerControls extends React.Component {
    render() {
        return (
            <div className="music-player">
                <div className="music-player__currently-played">
                    {/* <div className="">

                </div>
                <div className="">

                </div> */}
                </div>
                <div className="music-player__player-controls">
                    <div className="player-controls__upper-container">
                        <PlayerButtonsContainer />
                    </div>
                    <div className="player-controls__lower-container">
                        <AudioProgressBar />
                    </div>
                </div>
                <div className="music-player__volume">
                    {/* <div className="">

                    </div>
                    <div className="">

                    </div> */}
                </div>
            </div>
        );
    }
}

export default MusicPlayerControls;