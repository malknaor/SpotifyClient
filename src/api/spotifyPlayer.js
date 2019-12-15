import axios from 'axios';

const spotifyPlayer = axios.create({
    baseURL: 'https://api.spotify.com/v1/me/player'
});

export default spotifyPlayer;
