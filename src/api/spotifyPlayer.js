// import { connect } from 'react-redux';
import axios from 'axios';

// import * as playerActions from '../actions/PlayerActions';

const spotifyPlayer = axios.create({
    baseURL: 'https://api.spotify.com/v1/me/player'
});

// const spotifyPlayer = (() => {
//     const spotifyPlayerAPI = axios.create({
//         baseURL: 'https://api.spotify.com/v1/me/player'
//     });

//     const _repeat = device_id => {
        
//     }
//     // const _prev = 
//     // const _pause = 
//     // const _play = 
//     // const _next = 
//     // const _shuffle = 

//     return {
//         repeat: _repeat,
//         prev: _prev,
//         pause: _pause,
//         play: _play,
//         next: _next,
//         shuffle: _shuffle
//     };
// })();

// export default connect(null, {
//     repeat: playerActions.repeatSongs,
//     prev: playerActions.prevSong,
//     pause: playerActions.pauseSong,
//     play: playerActions.playSong,
//     next: playerActions.nextSong,
//     shuffle: playerActions.shuffleSongs
// })(spotifyPlayer);

export default spotifyPlayer;