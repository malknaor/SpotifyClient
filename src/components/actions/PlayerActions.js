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
import {
    REPEAT,
    PREV_SONG,
    PAUSE_SONG,
    PLAY_SONG,
    NEXT_SONG,
    SHUFFLE
} from '../../constants/Routes';
import requestBody from './requestBody';
import spotifyPlayer from '../../api/spotifyPlayer';

export const setDeviceId = deviceId => dispatch => {
    dispatch({ type: SET_DEVICE_ID, payload: deviceId });
};

export const setCurrentTrack = track => dispatch => {
    dispatch({ type: SET_CURRENT_TRACK, payload: track });
};

export const repeatSongs = deviceId => async dispatch => {
    await spotifyPlayer.put(`${REPEAT}?device_id=${deviceId}`, {}, {
        headers: requestBody.headers
    });

    dispatch({ type: PLAYER_REPEAT });
};

export const prevSong = deviceId => async dispatch => {
    await spotifyPlayer.post(`${PREV_SONG}?device_id=${deviceId}`, {}, {
        headers: requestBody.headers
    });

    dispatch({ type: PLAYER_PREV_SONG });
};

export const pauseSong = deviceId => async dispatch => {
    await spotifyPlayer.put(`${PAUSE_SONG}?device_id=${deviceId}`, {}, {
        headers: requestBody.headers
    });

    dispatch({ type: PLAYER_PAUSE });
};

export const playSong = (deviceId, context_uri = null, uris = null) => async dispatch => {
    let bodyContent = {};

    if (context_uri && !uris) {
        bodyContent = { "context_uri": context_uri };
    } else if (!context_uri && uris) {
        bodyContent = { "uris": uris };
    }

    await spotifyPlayer.put(
        `${PLAY_SONG}?device_id=${deviceId}`,
        bodyContent, {
        headers: {
            Authorization: requestBody.headers.Authorization,
            "Content-Type": "application/json"
        }
    });

    dispatch({ type: PLAYER_PLAY });
};

export const nextSong = deviceId => async dispatch => {
    await spotifyPlayer.post(`${NEXT_SONG}?device_id=${deviceId}`, {}, {
        headers: requestBody.headers
    });

    dispatch({ type: PLAYER_NEXT_SONG });
};

export const shuffleSongs = deviceId => async dispatch => {
    await spotifyPlayer.put(`${SHUFFLE}?device_id=${deviceId}`, {}, {
        headers: requestBody.headers
    });

    dispatch({ type: PLAYER_SHUFFLE });
};