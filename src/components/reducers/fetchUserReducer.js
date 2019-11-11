import { FETCH_USER } from '../../constants/ActionTypes';

const fetchUserReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_USER:
            return action.payload;
        default:
            return state;
    }
};

export default fetchUserReducer;