import React from 'react';
import { connect } from 'react-redux';

import ProgressBar from '../ProgressBar/ProgressBar';
import TrackDurationTime from './TrackDurationTimer';
import { trackSeek, incTrackCurrentDuration } from '../actions';
import { debounce, convertSongDuraionHMS } from '../../utils/jsUtils';
import './AudioDurationProgressBar.css';


class AudioDurationProgressBar extends React.Component {
    _intervalId;

    onTrackSeek = newSeekValue => {
        const { deviceId } = this.props.player;
        const { trackSeek } = this.props;

        trackSeek(deviceId, newSeekValue);
    }

    onSeek = debounce(this.onTrackSeek, 50);

    renderTrackProgress = () => {
        const { currentTrackData, currentDurationMS } = this.props.player;

        let totalDuration;

        if (currentTrackData) {
            totalDuration = Math.floor(currentTrackData.duration_ms / 1000);
        }
        
        return (
            <ProgressBar
                onChange={this.onSeek}
                currentValue={currentDurationMS}
                minVal={0}
                maxVal={totalDuration}
            />
        );
    }

    render() {
        const { currentTrackData, currentDurationMS } = this.props.player;
        let totalDuration, totalDurationMS, currentDuration = convertSongDuraionHMS(currentDurationMS * 1000);

        if (currentTrackData) {
            totalDurationMS = parseInt(currentTrackData.duration_ms);
            totalDuration = convertSongDuraionHMS(totalDurationMS);
        }

        return (
            <div className="audio-progress-container">
                <TrackDurationTime currentValue={currentDuration} />
                {this.renderTrackProgress()}
                <TrackDurationTime currentValue={totalDuration || '0:00'} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { player: state.player };
};

export default connect(mapStateToProps, {
    trackSeek,
    incTrackCurrentDuration
})(AudioDurationProgressBar);