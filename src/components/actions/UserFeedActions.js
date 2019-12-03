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
import requestBody from './requestBody';

export const fetchUser = () => async dispatch => {
    const res = await spotify.get(USER_ACCOUNT, requestBody);

    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchRecentlyPlayed = () => async dispatch => {
    const res = await spotify.get(RECENTLY_PLAYED, requestBody);

    dispatch({ type: FETCH_RECENTLY_PLAYED, payload: res.data });
};

export const fetchUserTopX = type => async dispatch => {
    const { headers } = requestBody;
    
    if (type === 'tracks') {
        const res = await spotify.get(USER_TOP_X, {
            headers: { 
                ...headers,
                type: type
            }
        });
    
        dispatch({ type: FETCH_USER_TOP_TRACKS, payload: res.data });
    } 
    
    if (type === 'artists') {
        const res = await spotify.get(USER_TOP_X, {
            headers: { 
                ...headers,
                type: type
            }
        });
    
        dispatch({ type: FETCH_USER_TOP_ARTISTS, payload: res.data });
    }
};