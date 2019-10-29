import React from 'react';
import { connect } from 'react-redux';

import '../../css/UserPage.css';

class UserPage extends React.Component {
    renderUser = () => {
        if (this.props.user) {
            return (
                <div className="user-info">
                    <img className="profile-pic" src={(this.props.user.images[0].url)} alt="Profile Pic"></img>
                    <h3 className="profile-name">{this.props.user.display_name}</h3>
                </div>
            );
        } else {
            return <div><h2>Loading...</h2></div>;
        }
    }

    render() {
        return (
            <div className="user-page">
                {this.renderUser()}
            </div>
        );
    }
}

const mapstateToProps = state => {
    return { user: state.user };
}
export default connect(mapstateToProps)(UserPage);