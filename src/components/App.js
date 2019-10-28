import React from 'react';
import ls from 'local-storage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainNavigation from './MainNaviagtion/MainNavigation';
import HomePage from './HomePage/HomePage';
import SearchPage from './SearchPage/SearchPage';
import UserLibrary from './UserLibrary/UserLibrary';
import UserPage from './UserPage/UserPage';
import { 
    ACCESS_TOKEN, 
    TOKEN_TYPE,
    SCOPE,
    EXPIRES_IN,
    REFRESH_TOKEN
} from '../constants/storageKeys';
import '../css/main.css';

class App extends React.Component {
    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);

        // save to local storage
        if (urlParams.get(ACCESS_TOKEN)) {
            // ls.clear();
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
                <Router>
                    <MainNavigation />
                    <div className="feed">
                        <Route path="/" exact component={HomePage}></Route>
                        <Route path="/search" component={SearchPage}></Route>
                        <Route path="/mylibrary" component={UserLibrary}></Route>
                        <Route path="/user" component={UserPage}></Route>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;