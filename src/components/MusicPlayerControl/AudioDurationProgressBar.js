import React from 'react';
import { connect } from 'react-redux';

import ProgressBar from '../ProgressBar/ProgressBar';
import { convertSongDuraionHMS } from '../../utils/jsUtils';
import './AudioDurationProgressBar.css';


const AudioDurationProgressBar = props => {
    const { currentTrackData, isPlay } = props.player;

    return (
        <div className="audio-progress-container">
            <div className="song-duration">
                <p>{props.currentDurationMS ? props.currentDurationMS : '0:00'}</p>
            </div>
            <ProgressBar
                onChange={() => console.log('current duration changed')}
                currentValue={props.currentDuration}
                minVal={0}
                maxVal={props.songDuration}
            />
            <div className="song-duration">
                <p>{props.songDurationMS ? props.songDurationMS : '0:00'}</p>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return { player: state.player };
};

export default connect(mapStateToProps)(AudioDurationProgressBar);