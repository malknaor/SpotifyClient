import { SEARCH } from '../../constants/Routes';
import { SEARCH_CONTENT } from '../../constants/ActionTypes';
import spotify from "../../api/spotify";
import requestBody from './requestBody';

export const searchContent = value => async dispatch => {
    const res = await spotify.get(SEARCH, { 
        ...requestBody,
        params: {
            q: value.toString().replace(" ", "%20"),
            type: "album,track"
        }
    });

    dispatch({ type: SEARCH_CONTENT, payload: res.data });
};