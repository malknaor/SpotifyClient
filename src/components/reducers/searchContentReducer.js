import { SEARCH_CONTENT, DEFAULT_SEARCH_CONTENT, GET_REC_BY_ARTIST, DELETE_REC_BY_ARTIST, DELETE_SEARCH_RESULTS } from '../../constants/ActionTypes';

const initialSearchState = {
    searchResults: null,
    defaultContent: null,
    artistTracks: null
};

const searchContentReducer = (state = initialSearchState, action) => {
    switch (action.type) {
        case SEARCH_CONTENT:
            return { ...state, searchResults: action.payload };
        case DEFAULT_SEARCH_CONTENT:
            return { ...state, defaultContent: action.payload };
        case GET_REC_BY_ARTIST:
            return { ...state, artistTracks: action.payload };
        case DELETE_REC_BY_ARTIST:
            return { ...state, artisTracks: null };
        case DELETE_SEARCH_RESULTS:
            return { ...state, searchResults: null };
        default:
            return state;
    }
};

export default searchContentReducer;