import { combineReducers } from 'redux';

import { 
    FETCH_USER,
    FETCH_RECENTLY_PLAYED 
} from '../../constants/ActionTypes';

const fetchUserReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_USER:
            return action.payload;
        default:
            return state;
    }
}

const fetchRecentlyPlayedReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_RECENTLY_PLAYED:
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
   user: fetchUserReducer,
   recentlyPlayed: fetchRecentlyPlayedReducer 
});