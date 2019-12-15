import React from 'react';
import { connect  }from 'react-redux';

import SpotifyWebPlayerScript from '../SpotifyWebPlayer/SpotifyWebPlayerScript';
import PlayerButtonsContainer from './PlayerButtonsContainer';
import AudioProgressBar from './AudioProgressBar';
import './MusicPlayerControls.css';

class MusicPlayerControls extends React.Component {
    render() {
        return (
            <div className="music-player">
                <SpotifyWebPlayerScript></SpotifyWebPlayerScript>
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

const mapStateToProps = state => {
    return { player: state.player }
}

export default connect(mapStateToProps)(MusicPlayerControls);