import {
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
    shuffle: false
}

const playerReducer = (state = initialPlayerState, action) => {
    switch (action.type) {
        case PLAYER_REPEAT:
            return { ...state, repeat: !state.repeat };
        case PLAYER_PAUSE:
            return { ...state, repeat: !state.repeat };
        case PLAYER_PLAY:
            return { ...state, repeat: !state.repeat };
        case PLAYER_SHUFFLE:
            return { ...state, repeat: !state.repeat };
        case PLAYER_PREV_SONG:
        case PLAYER_NEXT_SONG:
        default:
            return state;
    }
}

export default playerReducer;