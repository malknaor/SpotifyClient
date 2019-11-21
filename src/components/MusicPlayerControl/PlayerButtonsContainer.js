import React from 'react';

import PlayerButton from './PlayerButton';
import repeatButtonsImage from '../../assets/images/player_repeat.svg';
import prevButtonsImage from '../../assets/images/player_prev.svg';
import pauseButtonsImage from '../../assets/images/player_pause.svg';
import playButtonsImage from '../../assets/images/player_play.svg';
import nextButtonsImage from '../../assets/images/player_next.svg';
import shuffleButtonsImage from '../../assets/images/player_shuffle.svg';
import './MusicPlayerControls.css';

const GEN_BUTTONS_CLASSNAME = 'music-player__button--icon general-btns';
const PLAY_PAUSE_BUTTONS_CLASSNAME = 'music-player__button--icon play-pause-btns';

class PlayerButtonsContainer extends React.Component {
    state = { isPlay: true };

    togglePlayPauseImage = () => {
        this.setState({ ...this.state, isPlay: !this.state.isPlay });
    }

    playPauseOnClick = () => {
        this.togglePlayPauseImage();
    }

    renderPlayPauseButton = () => {
        if (this.state.isPlay) {
            return (
                <PlayerButton cssClassName={PLAY_PAUSE_BUTTONS_CLASSNAME} src={playButtonsImage} alt="prev" onClick={this.playPauseOnClick} />
            );
        } else {
            return (
                <PlayerButton cssClassName={PLAY_PAUSE_BUTTONS_CLASSNAME} src={pauseButtonsImage} alt="pause" onClick={this.playPauseOnClick} />
            );
        }
    }

    render() {
        return (
            <ul className="music-player__list">
                <li className="music-player__item">
                    <PlayerButton cssClassName={GEN_BUTTONS_CLASSNAME} src={repeatButtonsImage} alt="repeat" />
                </li>
                <li className="music-player__item">
                    <PlayerButton cssClassName={GEN_BUTTONS_CLASSNAME} src={prevButtonsImage} alt="prev" />
                </li>
                <li className="music-player__item">
                    {this.renderPlayPauseButton()}
                </li>
                <li className="music-player__item">
                    <PlayerButton cssClassName={GEN_BUTTONS_CLASSNAME} src={nextButtonsImage} alt="next" />
                </li>
                <li className="music-player__item">
                    <PlayerButton cssClassName={GEN_BUTTONS_CLASSNAME} src={shuffleButtonsImage} alt="shuffle" />
                </li>
            </ul>
        );
    }
}

export default PlayerButtonsContainer;