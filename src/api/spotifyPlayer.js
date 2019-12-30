// import { connect } from 'react-redux';
import axios from 'axios';

// import * as playerActions from '../actions/PlayerActions';

const spotifyPlayer = axios.create({
    baseURL: 'https://api.spotify.com/v1/me/player'
});

export default spotifyPlayer;