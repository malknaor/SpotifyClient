import React from 'react';
import { connect } from 'react-redux';

import Page from '../Page';
import SubNavigation from '../../Naviagtion/SubNavigation';
import MusicList from '../../MusicList/MusicList';
import {
    fetchRecentlyPlayed,
    fetchUserTopX
} from '../../actions';
import './HomePage.css';
import DisplayCard from '../../MusicList/DisplayCard';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.fetchRecentlyPlayed();
        this.props.fetchUserTopX('tracks');
        this.props.fetchUserTopX('artists');
    }

    renderRecentlyPlayed() {
        if (this.props.recentlyPlayed.items !== undefined) {
            return (
                <MusicList title="Recently Played">
                    {this.props.recentlyPlayed.items.slice(0, 6).map((current, index) => {
                        return (
                            <li className="music-list-item" key={index}>
                                <DisplayCard coverSrc={current.track.album.images[0].url} name={current.track.name} artistName="temp name" />
                            </li>
                        );
                    })}
                </MusicList>
            );
        }
    }

    renderTopTracks() {
        if (this.props.topTracks.items !== undefined) {
            return (
                <MusicList title="Top Tracks">
                    {this.props.topTracks.items.slice(0, 6).map((current, index) => {
                        return (
                            <li className="music-list-item" key={index}>
                                <DisplayCard coverSrc={current.album.images[0].url} name={current.name} artistName="temp" />
                            </li>
                        );
                    })}
                </MusicList>
            );
        }
    }

    renderTopArtists() {
        if (this.props.topArtists.items !== undefined) {
            return (
                <MusicList title="Top Artists">
                    {this.props.topArtists.items.slice(0, 6).map((current, index) => {
                        return (
                            <li className="music-list-item" key={index}>
                                <DisplayCard coverSrc={current.images[0].url} name={current.name} isArtist="true" artistName="temp" />
                            </li>
                        );
                    })}
                </MusicList>
            );
        }
    }

    render() {
        return (
            <Page>
                <div className="home-page">
                    <SubNavigation />
                    {this.renderRecentlyPlayed()}
                    {this.renderTopTracks()}
                    {this.renderTopArtists()}
                </div>
            </Page>
        );
    }
}

const mapStateToProps = state => {
    return {
        recentlyPlayed: state.recentlyPlayed,
        topTracks: state.userTopX.topTracks,
        topArtists: state.userTopX.topArtists
    };
};

export default connect(mapStateToProps, {
    fetchRecentlyPlayed,
    fetchUserTopX
})(HomePage);