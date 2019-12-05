import { FETCH_USER_TOP_TRACKS, FETCH_USER_TOP_ARTISTS } from '../../constants/ActionTypes';

const initialTopXState = { 
    topTracks: null,
    topArtists: null
};

const fetchUserTopXReducer = (state = initialTopXState, action) => {
    switch (action.type) {
        case FETCH_USER_TOP_TRACKS:
            return { ...state, topTracks: action.payload };
        case FETCH_USER_TOP_ARTISTS:
            return { ...state, topArtists: action.payload };
        default:
            return state;
    }
};

export default fetchUserTopXReducer;