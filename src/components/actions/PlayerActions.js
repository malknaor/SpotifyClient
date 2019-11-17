import ls from 'local-storage';

import { ACCESS_TOKEN } from '../../constants/StorageKeys';
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
import spotify from '../../api/spotify';

const requestBody = {
    headers: {
        Authorization: `Bearer ${ls.get(ACCESS_TOKEN)}`
    }
};

export const repeatSong = () => async dispatch => {
    
};

export const prevSong = () => async dispatch => {

};

export const pauseSong = () => async dispatch => {
    const response = await spotify.put(PAUSE_SONG, requestBody);

    dispatch({ type: PLAYER_PAUSE, payload: response.data });
};

export const playSong = () => async dispatch => {
    const response = await spotify.put(PLAY_SONG, requestBody);

    dispatch({ type: PLAYER_PLAY, payload: response.data });
};

export const nextSong = () => async dispatch => {

};

export const shuffleSong = () => async dispatch => {

};