import { combineReducers } from 'redux';

import searchContentReducer from './searchContentReducer';
import fetchUserReducer from './fetchUserReducer';
import fetchRecentlyPlayedReducer from './fetchRecentlyPlayedReducer';
import fetchUserTopXReducer from './fetchUserTopXReducer';
import playerReducer from './playerReducer';

export default combineReducers({
   search: searchContentReducer,
   user: fetchUserReducer,
   recentlyPlayed: fetchRecentlyPlayedReducer,
   userTopX: fetchUserTopXReducer,
   player: playerReducer
});