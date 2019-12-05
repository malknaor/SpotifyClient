import { SEARCH_CONTENT } from '../../constants/ActionTypes';

const searchContentReducer = (state = {}, action) => {
    switch (action.type) {
        case SEARCH_CONTENT:
            return action.payload;
        default:
            return state;
    }
};

export default searchContentReducer;