import ls from 'local-storage';

import { ACCESS_TOKEN } from '../../constants/StorageKeys';
import { 
    FETCH_USER, 
    FETCH_RECENTLY_PLAYED 
} from '../../constants/ActionTypes';
import { 
    USER_ACCOUNT,
    RECENTLY_PLAYED 
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
    const response = await spotify.get(RECENTLY_PLAYED, {
        body: {
            type: type
        },
        headers: headers
    });

    dispatch({ type: FETCH_RECENTLY_PLAYED, payload: response.data });
};