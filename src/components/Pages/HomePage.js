import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Page from './Page';
import SubNavigation from '../Naviagtion/SubNavigation';
import MusicList from '../MusicList/MusicList';
import { 
    fetchRecentlyPlayed,
    fetchUserTopX
} from '../actions';
import '../../css/HomePage.css';

class HomePage extends React.Component {
    componentDidMount(){
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
                                <Link className="item-image-link" to="/">
                                    <img className="album-cover" src={current.track.album.images[0].url} alt="album cover"></img>
                                    <img className="album-middle" src={require('../../assets/images/play.svg')} alt="album middle"></img>                                        
                                </Link>
                                <Link className="item-name-link" to={`/${current.track.name}`}>
                                    <p className="track-name">{current.track.name}</p>  
                                </Link>
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
                                <Link className="item-image-link" to="/">
                                    <img className="album-cover" src={current.album.images[0].url} alt="album cover"></img>
                                    <img className="album-middle" src={require('../../assets/images/play.svg')} alt="album middle"></img>                                        
                                </Link>
                                <Link className="item-name-link" to={`/${current.name}`}>
                                    <p className="track-name">{current.name}</p>  
                                </Link>
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
                                <Link className="item-image-link" to="/">
                                    <img className="album-cover artist" src={current.images[0].url} alt="album cover"></img>
                                    <img className="album-middle artist" src={require('../../assets/images/play.svg')} alt="album middle"></img>                                        
                                </Link>
                                <Link className="item-name-link" to={`/${current.name}`}>
                                    <p className="track-name">{current.name}</p>  
                                </Link>
                            </li>
                        );
                    })}
                </MusicList>
            );
        }
    }

    render() {
        return (
            <div className="home-page">
                <Page>
                    <SubNavigation />
                    {this.renderRecentlyPlayed()}
                    {this.renderTopTracks()}
                    {this.renderTopArtists()}
                </Page>
            </div>
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