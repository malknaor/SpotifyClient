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
    MUTE_PLAYER_VOLUME
} from '../../constants/ActionTypes';
import {
    REPEAT,
    PREV_SONG,
    PAUSE_SONG,
    PLAY_SONG,
    NEXT_SONG,
    SHUFFLE,
    SET_VOLUME
} from '../../constants/Routes';
import requestBody from './requestBody';
import spotifyPlayer from '../../api/spotifyPlayer';
import spotify from '../../api/spotify';

/****** Player Configuration ******/
export const setDeviceId = deviceId => dispatch => {
    dispatch({ type: SET_DEVICE_ID, payload: deviceId });
};

export const setCurrentTrack = track => dispatch => {
    dispatch({ type: SET_CURRENT_TRACK, payload: track });
};

export const setPlayerVolume = (deviceId, volumePercent) => dispatch => {
    try {
        spotify.put(SET_VOLUME, {}, {
            headers: requestBody.headers,
            params: {
                "device_id": deviceId,
                "volume_percent": volumePercent
            }
        });

        dispatch({ type: SET_PLAYER_VOLUME, payload: volumePercent });
    } catch (error) {
        console.log("TCL: setPlayerVolume -> error", error);
    }
};

export const mutePlayerVolume = (deviceId, volumePercent) => dispatch => {
    try {
        spotify.put(SET_VOLUME, {}, {
            headers: requestBody.headers,
            params: {
                "device_id": deviceId,
                "volume_percent": volumePercent
            }
        });

        dispatch({ type: MUTE_PLAYER_VOLUME });
    } catch (error) {
        console.log("TCL: mutePlayerVolume -> error", error);
    }
};

/****** Player Functionality ******/
export const repeatSongs = deviceId => async dispatch => {
    try {
        await spotify.put(REPEAT, {}, {
            headers: requestBody.headers,
            params: {
                "device_id": deviceId
            }
        });

        dispatch({ type: PLAYER_REPEAT });
    } catch (error) {
        console.log("TCL: repeatSong -> error", error);
    }
};

export const prevSong = deviceId => async dispatch => {
    try {
        await spotify.post(PREV_SONG, {}, {
            headers: requestBody.headers,
            params: {
                "device_id": deviceId
            }
        });

        dispatch({ type: PLAYER_PREV_SONG });
    } catch (error) {
        console.log("TCL: prevSong -> error", error);
    }
};

export const pauseSong = deviceId => async dispatch => {
    try {
        await spotifyPlayer.put(PAUSE_SONG, {}, {
            headers: requestBody.headers,
            params: {
                "device_id": deviceId
            }
        });

        dispatch({ type: PLAYER_PAUSE });
    } catch (error) {
        console.log("TCL: pauseSong -> error", error);
    }
};

export const playSong = (deviceId, context_uri = null, uris = null) => async dispatch => {
    try {
        let requestData = {};

        if (context_uri && !uris) {
            requestData = { "context_uri": context_uri };
        } else if (!context_uri && uris) {
            requestData = { "uris": uris };
        }

        await spotify.put(PLAY_SONG,
            requestData, {
            headers: {
                Authorization: requestBody.headers.Authorization,
                "Content-Type": "application/json"
            },
            params: {
                "device_id": deviceId
            }
        });

        dispatch({ type: PLAYER_PLAY });
    } catch (error) {
        console.log("TCL: playSong -> error", error);
    }
};

export const nextSong = deviceId => async dispatch => {
    try {
        await spotifyPlayer.post(`${NEXT_SONG}?device_id=${deviceId}`, {}, {
            headers: requestBody.headers
        });
    
        dispatch({ type: PLAYER_NEXT_SONG });
    } catch (error) {
        console.log("TCL: nextSong -> error", error);
    }
};

export const shuffleSongs = deviceId => async dispatch => {
    try {
        await spotifyPlayer.put(`${SHUFFLE}?device_id=${deviceId}`, {}, {
            headers: requestBody.headers
        });
    
        dispatch({ type: PLAYER_SHUFFLE });
    } catch (error) {
        console.log("TCL: shuffleSong -> error", error);
    }
};