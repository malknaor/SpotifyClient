import {
    SET_DEVICE_ID,
    SET_CURRENT_TRACK,
    PLAYER_REPEAT,
    PLAYER_PREV_SONG,
    PLAYER_PAUSE,
    PLAYER_PLAY,
    PLAYER_NEXT_SONG,
    PLAYER_SHUFFLE,
    SET_PLAYER_VOLUME
} from '../../constants/ActionTypes';

const initialPlayerState = {
    repeat: false,
    isPlay: false,
    shuffle: false,
    deviceId: null,
    currentTrackData: null,
    volumePercent: 80,
    volumeBeforeMute: 0,
    mute: false
}

const playerReducer = (state = initialPlayerState, action) => {
    switch (action.type) {
        case SET_DEVICE_ID: {
            return { ...state, deviceId: action.payload };
        }
        case SET_CURRENT_TRACK: {
            return { ...state, currentTrackData: action.payload };
        }
        case PLAYER_REPEAT: {
            return { ...state, repeat: !state.repeat };
        }
        case PLAYER_PAUSE: {
            return state.isPlay ? { ...state, isPlay: !state.isPlay } : { ...state };
        }
        case PLAYER_PLAY: {
            if (!state.isPlay) {
                return { ...state, isPlay: !state.isPlay };
            } else {
                return { ...state };
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
        case PLAYER_PREV_SONG:
        case PLAYER_NEXT_SONG:
        default:
            return state;
    }
}

export default playerReducer;