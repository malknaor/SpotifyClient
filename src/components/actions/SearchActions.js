import { SEARCH, SEARCH_DEFAULT_CONTENT } from '../../constants/Routes';
import { SEARCH_CONTENT, DEFAULT_SEARCH_CONTENT, GET_REC_BY_ARTIST, DELETE_REC_BY_ARTIST, DELETE_SEARCH_RESULTS } from '../../constants/ActionTypes';
import spotify from "../../api/spotify";
import requestBody from './requestBody';

export const searchContent = value => async dispatch => {
    try {
        const res = await spotify.get(SEARCH, {
            ...requestBody,
            params: {
                q: value.toString().replace(" ", "+"),
                type: "album,track"
            }
        });

        dispatch({ type: SEARCH_CONTENT, payload: res.data });
    } catch (error) {
        console.log("TCL: searchContent -> error", error);
    }
};

export const getDefaultSearchPageContent = () => async dispatch => {
    try {
        const res = await spotify.get(SEARCH_DEFAULT_CONTENT, {
            ...requestBody,
            params: {
                seed_genres: "rock"
            }
        });

        dispatch({ type: DEFAULT_SEARCH_CONTENT, payload: res.data });
    } catch (error) {
        console.log("TCL: getDefaultSearchPageContent-> error", error);
    }
};

export const getRecommendationByArtist = artistsId => async dispatch => {
    try {
        const res = await spotify.get(SEARCH_DEFAULT_CONTENT, {
            ...requestBody,
            params: {
                seed_artists: `${artistsId}`
            }
        });

        dispatch({ type: GET_REC_BY_ARTIST, payload: res.data });
    } catch (error) {
        console.log("TCL: getRecommendationByArtist-> error", error);
    }
};

export const deleteArtistTracks = () => dispatch => {
    dispatch({ type: DELETE_REC_BY_ARTIST });
};

export const deleteSearchResults = () => dispatch => {
    dispatch({ type: DELETE_SEARCH_RESULTS });
};