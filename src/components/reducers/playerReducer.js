import {
    SET_DEVICE_ID,
    SET_CURRENT_TRACK,
    PLAYER_REPEAT,
    PLAYER_PREV_SONG,
    PLAYER_PAUSE,
    PLAYER_PLAY,
    PLAYER_NEXT_SONG,
    PLAYER_SHUFFLE,
    SET_PLAYER_VOLUME,
    PLAYER_SEEK,
    INC_TRACK_CURRENT_DURATION,
    RESET_CURRENT_DURATION
} from '../../constants/ActionTypes';
import * as RepeatTypes from '../../constants/RepeatTypes';

const initialPlayerState = {
    repeatType: RepeatTypes.OFF,
    isPlay: false,
    playType: null,
    shuffle: false,
    deviceId: null,
    currentTrackData: null,
    currentDurationMS: 0,
    maxDurationMS: 0,
    intervalId: null,
    volumePercent: 100,
    volumeBeforeMute: 0,
    mute: false
}

const playerReducer = (state = initialPlayerState, action) => {
    switch (action.type) {
        case SET_DEVICE_ID: {
            return { ...state, deviceId: action.payload };
        }
        case SET_CURRENT_TRACK: {
            if (state.currentTrackData && (action.payload.id !== state.currentTrackData.id)) {
                return { ...state, currentDurationMS: 0, maxDurationMS: action.payload.duration_ms, currentTrackData: action.payload };
            } else {
                return { ...state, maxDurationMS: Math.ceil(action.payload.duration_ms / 1000), currentTrackData: action.payload };
            }
        }
        case PLAYER_REPEAT: {
            let repeatType;

            if (state.repeatType === RepeatTypes.OFF) {
                repeatType = RepeatTypes.TRACK;
            } else if (state.repeatType === RepeatTypes.TRACK) {
                repeatType = RepeatTypes.CONTEXT;
            } else {
                repeatType = RepeatTypes.OFF;
            }

            return { ...state, repeatType };
        }
        case PLAYER_PAUSE: {
            if (state.intervalId) clearInterval(state.intervalId);

            return state.isPlay ? { ...state, isPlay: !state.isPlay, intervalId: null } : { ...state };
        }
        case PLAYER_PLAY: {
            if (!state.isPlay) {
                return { ...state, isPlay: !state.isPlay, intervalId: action.payload.intervalId, playType: action.payload.playType };
            } else {
                return { ...state, currentDurationMS: 0, playType: action.payload.playType };
            }
        }
        case PLAYER_SHUFFLE: {
            return { ...state, shuffle: !state.shuffle };
        }
        case SET_PLAYER_VOLUME: {
            if (action.payload === 0 && !state.mute) {
                return { ...state, volumeBeforeMute: state.volumePercent, volumePercent: action.payload, mute: !state.mute };
            } else {
                return { ...state, volumePercent: action.payload, mute: false };
            }
        }
        case PLAYER_SEEK: {
            return { ...state, currentDurationMS: action.payload };
        }
        case INC_TRACK_CURRENT_DURATION: {
            if (state.currentDurationMS + 1 < state.maxDurationMS) {
                return { ...state, currentDurationMS: (state.currentDurationMS + 1) };
            } else if (state.playType === 'context'){
                return { ...state, currentDurationMS: 0 };
            } else {
                if (state.intervalId) clearInterval(state.intervalId);

                return { ...state, currentDurationMS: 0, isPlay: false, interval: null };
            }
        }
        case RESET_CURRENT_DURATION: {
            return { ...state, currentDurationMS: 0 };
        }
        case PLAYER_PREV_SONG:
        case PLAYER_NEXT_SONG:
        default:
            return state;
    }
}

export default playerReducer;