import React from 'react';
import { connect } from 'react-redux';

import SubNavigation from '../Naviagtion/SubNavigation';
import Page from '../Pages/Page';
import MusicList from '../MusicList/MusicList';
import { fetchRecentlyPlayed } from '../actions';
import '../../css/HomePage.css';

class HomePage extends React.Component {
    componentDidMount(){
        this.props.fetchRecentlyPlayed();
    }

    renderMusicLists() {
        if (this.props.recentlyPlayed) {
            console.log(this.props.recentlyPlayed);

            return(
                <MusicList title="Recently Played" items={this.props.recentlyPlayed.items} />
            );
        } else {
            return <div><h3>Loading...</h3></div>
        }
    }

    render() {
        return (
            <div className="home-page">
                <Page>
                    <SubNavigation />
                    {this.renderMusicLists()}
                </Page>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const recentlyPlayed = Array.isArray(state.recentlyPlayed)? null : state.recentlyPlayed;
    
    return { 
        recentlyPlayed: recentlyPlayed
    };
};

export default connect(mapStateToProps, { fetchRecentlyPlayed } )(HomePage);