import { FETCH_RECENTLY_PLAYED } from '../../constants/ActionTypes';

const initialRecenentlyPlayedState = { recentlyPlayed: null };

const fetchRecentlyPlayedReducer = (state = initialRecenentlyPlayedState, action) => {
    switch (action.type) {
        case FETCH_RECENTLY_PLAYED:
            return { ...state, recentlyPlayed: action.payload};
        default:
            return state;
    }
};

export default fetchRecentlyPlayedReducer;