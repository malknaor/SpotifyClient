import { SEARCH_CONTENT, DEFAULT_SEARCH_CONTENT, DELETE_SEARCH_RESULTS } from '../../constants/ActionTypes';

const initialSearchState = {
    searchResults: null,
    defaultContent: null
};

const searchContentReducer = (state = initialSearchState, action) => {
    switch (action.type) {
        case SEARCH_CONTENT:
            return { ...state, searchResults: action.payload };
        case DEFAULT_SEARCH_CONTENT:
            return { ...state, defaultContent: action.payload };
        case DELETE_SEARCH_RESULTS:
            return { ...state, searchResults: null };
        default:
            return state;
    }
};

export default searchContentReducer;