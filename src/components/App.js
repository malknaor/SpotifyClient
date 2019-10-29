import React from 'react';
import ls from 'local-storage';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { fetchUser } from './actions/index';
import MainNavigation from './Naviagtion/MainNavigation';
import HomePage from './HomePage/HomePage';
import SearchPage from './SearchPage/SearchPage';
import UserLibrary from './UserLibrary/UserLibrary';
import UserPage from './UserPage/UserPage';
import LoginPage from './LoginPage/LoginPage';
import { 
    ACCESS_TOKEN, 
    TOKEN_TYPE,
    SCOPE,
    EXPIRES_IN,
    REFRESH_TOKEN
} from '../constants/StorageKeys';
import '../css/main.css';

class App extends React.Component {
    componentDidUpdate() {
        console.log(this.props);

        this.renderPage();
    }

    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);

        // save to local storage
        if (urlParams.get(ACCESS_TOKEN)) {
            // Update local storage
            ls.set(ACCESS_TOKEN, urlParams.get(ACCESS_TOKEN));
            ls.set(TOKEN_TYPE, urlParams.get(TOKEN_TYPE));
            ls.set(SCOPE, urlParams.get(SCOPE));
            ls.set(EXPIRES_IN, urlParams.get(EXPIRES_IN));
            ls.set(REFRESH_TOKEN, urlParams.get(REFRESH_TOKEN));

            // Update current user
            this.props.fetchUser();
        }
    }

    renderPage() {
        if (this.props.user) {
            return (
                <Router>
                    <MainNavigation user={this.props.user}/>
                    <div className="feed">
                        <Route path="/" exact component={HomePage}></Route>
                        <Route path="/search" component={SearchPage}></Route>
                        <Route path="/mylibrary" component={UserLibrary}></Route>
                        <Route path="/user" component={UserPage}></Route>
                    </div>
                </Router>
            );
        } else {
            return (
                <LoginPage />
            );
        }
    }

    render() {
        return (
            <div className="app-container">
                {this.renderPage()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    const user = Array.isArray(state.user)? null : state.user;

    return { user: user };
};

export default connect(mapStateToProps, { fetchUser })(App);