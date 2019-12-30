import React from 'react';
import { connect } from 'react-redux';

import * as playerActions from '../actions/PlayerActions';
import * as RepeatTypes from '../../constants/RepeatTypes';
import PlayerButton from './PlayerButton';
import repeatButtonImage from '../../assets/images/player_repeat.svg';
import repeatTrackButtonImage from '../../assets/images/player_repeat_track.svg';
import repeatContextButtonImage from '../../assets/images/player_repeat_context.svg';
import prevButtonImage from '../../assets/images/player_prev.svg';
import pauseButtonImage from '../../assets/images/player_pause.svg';
import playButtonImage from '../../assets/images/player_play.svg';
import nextButtonImage from '../../assets/images/player_next.svg';
import shuffleButtonImage from '../../assets/images/player_shuffle.svg';
import shuffleActiveButtonImage from '../../assets/images/player_shuffle_active.svg';
import './PlayerButtonsContainer.css';

const GEN_BUTTONS_CLASSNAME = 'music-player__button--icon general-btns';
const PLAY_PAUSE_BUTTONS_CLASSNAME = 'music-player__button--icon play-pause-btns';

class PlayerButtonsContainer extends React.Component {
    onPlayPauseOnClick = () => {
        const { incTrackCurrentDuration } = this.props;
        const { isPlay, deviceId, intervalId } = this.props.player;

        if (!isPlay) {
            let newIntervalId = intervalId || setInterval(incTrackCurrentDuration, 1000);
            
            this.props.play(deviceId, null, null, newIntervalId);
        } else {
            this.props.pause(deviceId);
        }
    }

    renderPlayPauseButton = () => {
        const { isPlay } = this.props.player;

        if (!isPlay) {
            return (
                <PlayerButton cssClassName={PLAY_PAUSE_BUTTONS_CLASSNAME} src={playButtonImage} alt="play" onClick={this.onPlayPauseOnClick} />
            );
        } else {
            return (
                <PlayerButton cssClassName={PLAY_PAUSE_BUTTONS_CLASSNAME} src={pauseButtonImage} alt="pause" onClick={this.onPlayPauseOnClick} />
            );
        }
    }

    renderRepeatButton = () => {
        const { deviceId, repeatType } = this.props.player;

        if (repeatType === RepeatTypes.OFF) {
            return (
                <PlayerButton cssClassName={GEN_BUTTONS_CLASSNAME} src={repeatButtonImage} alt="repeat" onClick={() => this.props.repeat(deviceId, RepeatTypes.TRACK)} />
            );
        } else if (repeatType === RepeatTypes.TRACK) {
            return (
                <PlayerButton cssClassName={GEN_BUTTONS_CLASSNAME} src={repeatTrackButtonImage} alt="repeat" onClick={() => this.props.repeat(deviceId, RepeatTypes.CONTEXT)} />
            );
        } else if (repeatType === RepeatTypes.CONTEXT) {
            return (
                <PlayerButton cssClassName={GEN_BUTTONS_CLASSNAME} src={repeatContextButtonImage} alt="repeat" onClick={() => this.props.repeat(deviceId, RepeatTypes.OFF)} />
            );
        }
    }

    render() {
        const { deviceId, shuffle } = this.props.player;
        const shuffleBtnsrc = shuffle ? shuffleActiveButtonImage : shuffleButtonImage;

        return (
            <ul className="music-player__list">
                <li className="music-player__item">
                    {this.renderRepeatButton()}
                </li>
                <li className="music-player__item">
                    <PlayerButton cssClassName={GEN_BUTTONS_CLASSNAME} src={prevButtonImage} alt="prev" onClick={() => this.props.prev(deviceId)} />
                </li>
                <li className="music-player__item">
                    {this.renderPlayPauseButton()}
                </li>
                <li className="music-player__item">
                    <PlayerButton cssClassName={GEN_BUTTONS_CLASSNAME} src={nextButtonImage} alt="next" onClick={() => this.props.next(deviceId)} />
                </li>
                <li className="music-player__item">
                    <PlayerButton cssClassName={GEN_BUTTONS_CLASSNAME} src={shuffleBtnsrc} alt="shuffle" onClick={() => this.props.shuffle(deviceId, !shuffle)} />
                </li>
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return { player: state.player }
};

export default connect(mapStateToProps, {
    repeat: playerActions.repeatSongs,
    prev: playerActions.prevSong,
    pause: playerActions.pauseSong,
    play: playerActions.playSong,
    next: playerActions.nextSong,
    shuffle: playerActions.shuffleSongs,
    incTrackCurrentDuration: playerActions.incTrackCurrentDuration
})(PlayerButtonsContainer);