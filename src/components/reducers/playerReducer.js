import {
    SET_DEVICE_ID,
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
    deviceId: null
}

const playerReducer = (state = initialPlayerState, action) => {
    switch (action.type) {
        case SET_DEVICE_ID:
            return { ...state, deviceId: action.payload };
        case PLAYER_REPEAT:
            return { ...state, repeat: !state.repeat };
        case PLAYER_PAUSE:
            return { ...state, pause: !state.pause, play: !state.play };
        case PLAYER_PLAY:
            return !state.play? { ...state, play: !state.play, pause: !state.pause } : { ...state };
        case PLAYER_SHUFFLE:
            return { ...state, shuffle: !state.shuffle };
        case PLAYER_PREV_SONG:
        case PLAYER_NEXT_SONG:
        default:
            return state;
    }
}

export default playerReducer;