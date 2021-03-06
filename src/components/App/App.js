import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import localStorageService from '../../Services/LocalStorageService';
import { fetchUser } from '../actions/index';
import MainNavigation from '../Naviagtion/MainNavigation';
import HomePage from '../Pages/HomePage/HomePage';
import SearchPage from '../Pages/SearchPage/SearchPage';
import UserLibraryPage from '../Pages/UserLibraryPage/UserLibraryPage';
import UserPage from '../Pages/UserAccountPage/UserAccountPage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import MusicPlayerControls from '../MusicPlayerControl/MusicPlayerControls';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../constants/StorageKeys';
import './App.css';

class App extends React.Component {
    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);

        // save to local storage
        if (urlParams.get(ACCESS_TOKEN)) {
            const tokenObj = {
                access_token: urlParams.get(ACCESS_TOKEN),
                refresh_token: urlParams.get(REFRESH_TOKEN)
            }

            localStorageService.setToken(tokenObj);

            // Update current user
            this.props.fetchUser();
        } else if (localStorageService.getToken()) {
            // Update current user
            this.props.fetchUser();
        }
    }

    renderPage() {
        if (this.props.user) {
            return (
                <Router>
                    <div className="app-upper-container">
                        <div className="app-navigation">
                            <MainNavigation user={this.props.user} />
                        </div>
                        <div className="app-page">
                            <Switch>
                                <Route path="/" exact component={HomePage}></Route>
                                <Route path="/login" exact component={LoginPage}></Route>
                                <Route path="/search" component={SearchPage}></Route>
                                <Route path="/mylibrary" component={UserLibraryPage}></Route>
                                <Route path="/user" component={UserPage}></Route>
                            </Switch>
                        </div>
                    </div>
                    <div className="app-lower-container">
                        <MusicPlayerControls />
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
    return { user: state.user.user }
};

export default connect(mapStateToProps, { fetchUser })(App);