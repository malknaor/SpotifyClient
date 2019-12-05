import { 
    PLAYER_REPEAT,
    PLAYER_PREV_SONG,
    PLAYER_PAUSE,
    PLAYER_PLAY,
    PLAYER_NEXT_SONG,
    PLAYER_SHUFFLE
} from '../../constants/ActionTypes';
import { 
    REPEAT,
    PREV_SONG,
    PAUSE_SONG,
    PLAY_SONG,
    NEXT_SONG,
    SHUFFLE
} from '../../constants/Routes';
import requestBody from './requestBody';
import spotify from '../../api/spotify';

export const repeatSong = () => async dispatch => {
    const res = await spotify.put(REPEAT, requestBody);

    dispatch({ type: PLAYER_REPEAT, payload: res.data });
};

export const prevSong = () => async dispatch => {
    const res = await spotify.put(PREV_SONG, requestBody);

    dispatch({ type: PLAYER_PREV_SONG, payload: res.data });
};

export const pauseSong = () => async dispatch => {
    const res = await spotify.put(PAUSE_SONG, requestBody);

    dispatch({ type: PLAYER_PAUSE, payload: res.data });
};

export const playSong = () => async dispatch => {
    const res = await spotify.put(PLAY_SONG, requestBody);

    dispatch({ type: PLAYER_PLAY, payload: res.data });
};

export const nextSong = () => async dispatch => {
    const res = await spotify.put(NEXT_SONG, requestBody);

    dispatch({ type: PLAYER_NEXT_SONG, payload: res.data });
};

export const shuffleSong = () => async dispatch => {
    const res = await spotify.put(SHUFFLE, requestBody);

    dispatch({ type: PLAYER_SHUFFLE, payload: res.data });
};