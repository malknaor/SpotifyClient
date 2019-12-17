import React from 'react';
import Script from 'react-load-script';
import { connect } from 'react-redux';

import { setDeviceId, setCurrentTrack } from '../actions/index';
import localStorageService from '../../Services/LocalStorageService';

class SpotifyWebPlayerScript extends React.Component {
    onLoad = () => {
        window.onSpotifyWebPlaybackSDKReady = () => {
            const { setDeviceId, setCurrentTrack } = this.props;
            const token = localStorageService.getToken();
            const player = new window.Spotify.Player({
                name: 'Web Playback SDK Quick Start Player',
                getOAuthToken: cb => { cb(token); }
            });

            // Error handling
            player.addListener('initialization_error', ({ message }) => { console.error(message); });
            player.addListener('authentication_error', ({ message }) => { console.error(message); });
            player.addListener('account_error', ({ message }) => { console.error(message); });
            player.addListener('playback_error', ({ message }) => { console.error(message); });

            // Playback status updates
            player.addListener('player_state_changed', state => {
                let currentTrack = null;
                
                if (state) {
                    const { track_window } = state;

                    currentTrack = track_window.current_track;
                }
                
                setCurrentTrack(currentTrack);
            });

            // Ready
            player.addListener('ready', ({ device_id }) => {
                setDeviceId(device_id);
            });

            // Not Ready
            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });

            // Connect to the player!
            player.connect();
        };
    }

    render() {
        return (
            <Script
                url="https://sdk.scdn.co/spotify-player.js"
                onLoad={this.onLoad}
                onError={console.log}
            >
            </Script>
        );
    }
}

export default connect(null, {
    setDeviceId,
    setCurrentTrack
})(SpotifyWebPlayerScript);