import React from 'react';
import { connect } from 'react-redux';

import { getRecommendationByArtist } from '../actions/SearchActions';
import SongsListItem from './SongListItem';
import './SongsList.css';

class SongsLists extends React.Component {
    componentDidMount() {
        this.props.getRecommendationByArtist(this.props.artistId)
    }

    renderTracks = () => {
        if (this.props.tracks) {
            const { tracks } = this.props.tracks;

            return (
                <>
                    {tracks.map((current, index) => {
                        const artistsNames = current.artists.map(current => current.name).join(', ');

                        return (
                            <SongsListItem
                                coverImg={current.album.images[0].url}
                                songName={current.name}
                                artistName={artistsNames} key={index}
                            />
                        );
                    })}
                </>
            );
        }
    }

    render() {
        return (
            <div className="songs-container">
                <h2 className="songs-list-title">{this.props.title}</h2>
                <ul className="songs-list">
                    {this.renderTracks()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { tracks: state.search.artistTracks }
}

export default connect(mapStateToProps, { getRecommendationByArtist })(SongsLists);