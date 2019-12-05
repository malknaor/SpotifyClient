import { FETCH_USER } from '../../constants/ActionTypes';

const initialUserState = {
    user: null
};

const fetchUserReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case FETCH_USER:
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

export default fetchUserReducer;