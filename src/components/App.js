import React from 'react';
import ls from 'local-storage';

import MainNavigation from './Naviagtion/MainNavigation';
import { 
    ACCESS_TOKEN, 
    TOKEN_TYPE,
    SCOPE,
    EXPIRES_IN,
    REFRESH_TOKEN
} from '../constants/storageKeys';
import '../main.css';
import './App.css';

class App extends React.Component {
    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);

        // save to local storage
        if (!ls.get(ACCESS_TOKEN)) {
            ls.set(ACCESS_TOKEN, urlParams.get(ACCESS_TOKEN));
            ls.set(TOKEN_TYPE, urlParams.get(TOKEN_TYPE));
            ls.set(SCOPE, urlParams.get(SCOPE));
            ls.set(EXPIRES_IN, urlParams.get(EXPIRES_IN));
            ls.set(REFRESH_TOKEN, urlParams.get(REFRESH_TOKEN));
        }
    }

    render() {

        return (
            <div className="app-container">
                <MainNavigation />
            </div>
        );
    }
}

export default App;