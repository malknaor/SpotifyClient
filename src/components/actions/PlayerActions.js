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
    MUTE_PLAYER_VOLUME,
    PLAYER_SEEK,
    INC_TRACK_CURRENT_DURATION,
    RESET_CURRENT_DURATION
} from '../../constants/ActionTypes';
import {
    REPEAT,
    PREV_SONG,
    PAUSE_SONG,
    PLAY_SONG,
    NEXT_SONG,
    SHUFFLE,
    SET_VOLUME,
    SEEK
} from '../../constants/Routes';
import requestBody from './requestBody';
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

/****** Player Buttons Functionality ******/
export const repeatSongs = (device_id, state) => async dispatch => {
    try {
        await spotify.put(REPEAT, {}, {
            headers: requestBody.headers,
            params: {
                device_id,
                state
            }
        });

        dispatch({ type: PLAYER_REPEAT });
    } catch (error) {
        console.log("TCL: repeatSong -> error", error);
    }
};

export const prevSong = device_id => async dispatch => {
    try {
        await spotify.post(PREV_SONG, {}, {
            headers: requestBody.headers,
            params: {
                device_id
            }
        });

        dispatch({ type: PLAYER_PREV_SONG });
    } catch (error) {
        console.log("TCL: prevSong -> error", error);
    }
};

export const pauseSong = device_id => async dispatch => {
    try {
        await spotify.put(PAUSE_SONG, {}, {
            headers: requestBody.headers,
            params: {
                device_id
            }
        });

        dispatch({ type: PLAYER_PAUSE });
    } catch (error) {
        console.log("TCL: pauseSong -> error", error);
    }
};

export const playSong = (device_id, context_uri = null, uris = null, intervalId) => async dispatch => {
    try {
        let requestData = {};
        let playType;

        if (context_uri && !uris) {
            requestData = { "context_uri": context_uri };
            playType = 'context';
        } else if (!context_uri && uris) {
            requestData = { "uris": uris };
            playType = 'uris';
        }

        await spotify.put(PLAY_SONG,
            requestData, {
            headers: {
                Authorization: requestBody.headers.Authorization,
                "Content-Type": "application/json"
            },
            params: {
                device_id
            }
        });

        dispatch({ type: PLAYER_PLAY, payload: { intervalId, playType } });
    } catch (error) {
        console.log("TCL: playSong -> error", error);
    }
};

export const nextSong = device_id => async dispatch => {
    try {
        await spotify.post(NEXT_SONG, {}, {
            headers: requestBody.headers,
            params: {
                device_id
            }
        });

        dispatch({ type: PLAYER_NEXT_SONG });
    } catch (error) {
        console.log("TCL: nextSong -> error", error);
    }
};

export const shuffleSongs = (device_id, state) => async dispatch => {
    try {
        await spotify.put(SHUFFLE, {}, {
            headers: requestBody.headers,
            params: {
                device_id,
                state
            }
        });

        dispatch({ type: PLAYER_SHUFFLE });
    } catch (error) {
        console.log("TCL: shuffleSong -> error", error);
    }
};

/****** Player Seek Functionality ******/
export const trackSeek = (device_id, position_ms) => dispatch => {
    try {
        spotify.put(SEEK, {}, {
            headers: requestBody.headers,
            params: {
                device_id,
                position_ms: position_ms * 1000
            }
        });

        dispatch({ type: PLAYER_SEEK, payload: position_ms });
    } catch (error) {
        console.log("TCL: shuffleSong -> error", error);
    }
};

export const incTrackCurrentDuration = () => dispatch => {
    try {
        dispatch({ type: INC_TRACK_CURRENT_DURATION });
    } catch (error) {
        console.log("TCL: shuffleSong -> error", error);
    }
};

export const resetCurrentDuration = () => dispatch => {
    try {
        dispatch({ type: RESET_CURRENT_DURATION });
    } catch (error) {
        console.log("TCL: shuffleSong -> error", error);
    }
};