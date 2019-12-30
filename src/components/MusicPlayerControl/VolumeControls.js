import React from 'react';
import { connect } from 'react-redux';

import { setPlayerVolume, mutePlayerVolume } from '../actions/index';
import { debounce } from '../../utils/jsUtils';
import ProgressBar from '../ProgressBar/ProgressBar';
import audioLevelMute from '../../assets/images/volume_mute.svg';
import audioLevelLow from '../../assets/images/volume_low.svg';
import audioLevelMedium from '../../assets/images/volume_medium.svg';
import audioLevelHigh from '../../assets/images/volume_high.svg';
import './VolumeControls.css';

class VolumeControls extends React.Component {
    getVolumeIcon = value => {
        if (value === 0) {
            return audioLevelMute;
        } else if (value > 0 && value <= ((1 / 3) * 100)) {
            return audioLevelLow;
        } else if (value > ((1 / 3) * 100) && value <= ((2 / 3) * 100)) {
            return audioLevelMedium;
        } else {
            return audioLevelHigh;
        }
    }

    setPlayerNewVolume = newPercentage => {
        const { mute, volumePercent, volumeBeforeMute, setPlayerVolume, deviceId } = this.props;

        if (newPercentage === 0) {
            if (!mute) {
                setPlayerVolume(deviceId, newPercentage);
            } else {
                setPlayerVolume(deviceId, volumeBeforeMute);
            }
        } else if (volumePercent != newPercentage) {
            setPlayerVolume(deviceId, newPercentage);
        }
    }

    onVolumeChange = debounce(this.setPlayerNewVolume, 1500);

    componentDidUpdate() {
        this.render();
    }

    render() {
        const { volumePercent } = this.props;

        return (
            <div className="volume_controls_container">
                <img
                    className="volume_icon"
                    src={this.getVolumeIcon(eval(volumePercent, 10))}
                    alt="volume icon"
                    onClick={() => this.setPlayerNewVolume(0)}
                >
                </img>
                <ProgressBar
                    onChange={this.setPlayerNewVolume}
                    currentValue={volumePercent}
                    minVal={0}
                    maxVal={100}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        deviceId: state.player.deviceId,
        volumePercent: state.player.volumePercent,
        volumeBeforeMute: state.player.volumeBeforeMute,
        mute: state.player.mute
    };
};

export default connect(mapStateToProps, {
    setPlayerVolume,
    mutePlayerVolume
})(VolumeControls);