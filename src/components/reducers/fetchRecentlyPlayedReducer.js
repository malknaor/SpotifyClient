import { FETCH_RECENTLY_PLAYED } from '../../constants/ActionTypes';

const fetchRecentlyPlayedReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_RECENTLY_PLAYED:
            return action.payload;
        default:
            return state;
    }
};

export default fetchRecentlyPlayedReducer;