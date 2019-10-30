import { combineReducers } from 'redux';

import { 
    FETCH_USER,
    FETCH_RECENTLY_PLAYED ,
    FETCH_USER_TOP_TRACKS,
    FETCH_USER_TOP_ARTISTS
} from '../../constants/ActionTypes';

const iniState = {
    user: null,
    recentlyPlayed: null,
    topTracks: null,
    topArtists: null
}

const fetchUserReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_USER:
            return action.payload;
        default:
            return state;
    }
}

const fetchRecentlyPlayedReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_RECENTLY_PLAYED:
            return action.payload;
        default:
            return state;
    }
}

const fetchUserTopXReducer = (state = { topTracks: {}, topArtists: {} }, action) => {
    switch (action.type) {
        case FETCH_USER_TOP_TRACKS:
            return { ...state, topTracks: action.payload };
        case FETCH_USER_TOP_ARTISTS:
            return { ...state, topArtists: action.payload };
        default:
            return state;
    }
}

export default combineReducers({
   user: fetchUserReducer,
   recentlyPlayed: fetchRecentlyPlayedReducer,
   userTopX: fetchUserTopXReducer 
});