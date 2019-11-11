import { combineReducers } from 'redux';

import fetchUserReducer from './fetchUserReducer';
import fetchRecentlyPlayedReducer from './fetchRecentlyPlayedReducer';
import fetchUserTopXReducer from './fetchUserTopXReducer';

export default combineReducers({
   user: fetchUserReducer,
   recentlyPlayed: fetchRecentlyPlayedReducer,
   userTopX: fetchUserTopXReducer 
});