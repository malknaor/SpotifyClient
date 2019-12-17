import React from 'react';
import  { connect } from 'react-redux';

import * as playerActions from '../actions/PlayerActions';
import PlayerButton from './PlayerButton';
import repeatButtonsImage from '../../assets/images/player_repeat.svg';
import prevButtonsImage from '../../assets/images/player_prev.svg';
import pauseButtonsImage from '../../assets/images/player_pause.svg';
import playButtonsImage from '../../assets/images/player_play.svg';
import nextButtonsImage from '../../assets/images/player_next.svg';
import shuffleButtonsImage from '../../assets/images/player_shuffle.svg';
import './PlayerButtonsContainer.css';

const GEN_BUTTONS_CLASSNAME = 'music-player__button--icon general-btns';
const PLAY_PAUSE_BUTTONS_CLASSNAME = 'music-player__button--icon play-pause-btns';

class PlayerButtonsContainer extends React.Component {
    onPlayPauseOnClick = () => {
        const { play, pause, deviceId } = this.props.player;

        if (!play && pause) {
            this.props.play(deviceId);
        } else {
            this.props.pause(deviceId);
        }
    }

    renderPlayPauseButton = () => {
        const { play, pause, deviceId } = this.props.player;

        if (!play && pause) {
            return (
                <PlayerButton cssClassName={PLAY_PAUSE_BUTTONS_CLASSNAME} src={playButtonsImage} alt="prev" onClick={this.onPlayPauseOnClick} />
            );
        } else {
            return (
                <PlayerButton cssClassName={PLAY_PAUSE_BUTTONS_CLASSNAME} src={pauseButtonsImage} alt="pause" onClick={this.onPlayPauseOnClick} />
            );
        }
    }

    render() {
        const { deviceId } = this.props.player;

        return (
            <ul className="music-player__list">
                <li className="music-player__item">
                    <PlayerButton cssClassName={GEN_BUTTONS_CLASSNAME} src={repeatButtonsImage} alt="repeat" onClick={() => this.props.repeat(deviceId)}/>
                </li>
                <li className="music-player__item">
                    <PlayerButton cssClassName={GEN_BUTTONS_CLASSNAME} src={prevButtonsImage} alt="prev" onClick={() => this.props.prev(deviceId)}/>
                </li>
                <li className="music-player__item">
                    {this.renderPlayPauseButton()}
                </li>
                <li className="music-player__item">
                    <PlayerButton cssClassName={GEN_BUTTONS_CLASSNAME} src={nextButtonsImage} alt="next" onClick={() => this.props.next(deviceId)}/>
                </li>
                <li className="music-player__item">
                    <PlayerButton cssClassName={GEN_BUTTONS_CLASSNAME} src={shuffleButtonsImage} alt="shuffle" onClick={() => this.props.shuffle(deviceId)}/>
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
    shuffle: playerActions.shuffleSongs
})(PlayerButtonsContainer);