import React from 'react';
import ls from 'local-storage';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { fetchUser } from '../actions/index';
import MainNavigation from '../Naviagtion/MainNavigation';
import HomePage from '../Pages/HomePage';
import SearchPage from '../Pages/SearchPage';
import UserLibraryPage from '../Pages/UserLibraryPage';
import UserPage from '../Pages/UserPage';
import LoginPage from '../Pages/LoginPage';
import { 
    ACCESS_TOKEN, 
    TOKEN_TYPE,
    SCOPE,
    EXPIRES_IN,
    REFRESH_TOKEN
} from '../../constants/StorageKeys';
import '../../css/App.css';

class App extends React.Component {
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
        if (Object.keys(this.props.user).length > 0) {
            return (
                <Router>
                    <MainNavigation user={this.props.user}/>
                    <div className="feed">
                        <Route path="/" exact component={HomePage}></Route>
                        <Route path="/search" component={SearchPage}></Route>
                        <Route path="/mylibrary" component={UserLibraryPage}></Route>
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
    return { user: state.user }
};

export default connect(mapStateToProps, { fetchUser })(App);