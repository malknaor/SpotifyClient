import ls from 'local-storage';

import { ACCESS_TOKEN } from '../../constants/StorageKeys';
import { 
    FETCH_USER, 
    FETCH_RECENTLY_PLAYED,
    FETCH_USER_TOP_TRACKS,
    FETCH_USER_TOP_ARTISTS
} from '../../constants/ActionTypes';
import { 
    USER_ACCOUNT,
    RECENTLY_PLAYED,
    USER_TOP_X 
} from '../../constants/Routes';
import spotify from '../../api/spotify';

const requestBody = {
    headers: {
        Authorization: `Bearer ${ls.get(ACCESS_TOKEN)}`
    }
};

export const fetchUser = () => async dispatch => {
    const response = await spotify.get(USER_ACCOUNT, requestBody);

    dispatch({ type: FETCH_USER, payload: response.data });
};

export const fetchRecentlyPlayed = () => async dispatch => {
    const response = await spotify.get(RECENTLY_PLAYED, requestBody);

    dispatch({ type: FETCH_RECENTLY_PLAYED, payload: response.data });
};

export const fetchUserTopX = type => async dispatch => {
    const { headers } = requestBody;
    
    if (type === 'tracks') {
        const response = await spotify.get(USER_TOP_X, {
            headers: { 
                ...headers,
                type: type
            }
        });
    
        dispatch({ type: FETCH_USER_TOP_TRACKS, payload: response.data });
    } 
    
    if (type === 'artists') {
        const response = await spotify.get(USER_TOP_X, {
            headers: { 
                ...headers,
                type: type
            }
        });
    
        dispatch({ type: FETCH_USER_TOP_ARTISTS, payload: response.data });
    }
};