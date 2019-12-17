import {
    SET_DEVICE_ID,
    SET_CURRENT_TRACK,
    PLAYER_REPEAT,
    PLAYER_PREV_SONG,
    PLAYER_PAUSE,
    PLAYER_PLAY,
    PLAYER_NEXT_SONG,
    PLAYER_SHUFFLE
} from '../../constants/ActionTypes';

const initialPlayerState = {
    repeat: false,
    pause: true,
    play: false,
    shuffle: false,
    deviceId: null,
    currentTrackData: null
}

const playerReducer = (state = initialPlayerState, action) => {
    switch (action.type) {
        case SET_DEVICE_ID:
            return { ...state, deviceId: action.payload };
        case SET_CURRENT_TRACK: {
            let changePlayState = state.play && action.payload;

            if (!changePlayState) {
                return { ...state, currentTrackData: action.payload };
            } else {
                return { ...state, currentTrackData: action.payload, play: !state.play, pause: !state.pause };
            }
        }
        case PLAYER_REPEAT:
            return { ...state, repeat: !state.repeat };
        case PLAYER_PAUSE:
            return { ...state, pause: !state.pause, play: !state.play };
        case PLAYER_PLAY: {
            if (!state.play) {
                return { ...state, play: !state.play, pause: !state.pause };
            } else {
                return { ...state };
            }
        }
        case PLAYER_SHUFFLE:
            return { ...state, shuffle: !state.shuffle };
        case PLAYER_PREV_SONG:
        case PLAYER_NEXT_SONG:
        default:
            return state;
    }
}

export default playerReducer;