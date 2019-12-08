import React from "react";

import MusicList from "../MusicList/MusicList";
import MusicListDisplayCard from "../MusicList/MusicListDisplayCard";
import SongsLists from "../SongsList.js/SongsList";
import './ResultsContentDisplay.css';

const ResultsContentDisplay = props => {
    const { albums, tracks } = props.content;

    return (
        <div className="results-content">
            <div className="leading-result">
                <div className="top-artist-result">
                    <MusicList title="Top result">
                        <MusicListDisplayCard coverSrc={albums.items[0].images[0].url} name={albums.items[0].name} isArtist="true" artistName={albums.items[0].artists[0].name} />
                    </MusicList>
                </div>
                <div className="top-artist-tracks">
                    <SongsLists title="Tracks" artistId={albums.items[0].artists[0].id} />
                </div>
            </div>
            <div className="featuring-top-artist">

            </div>
            <div className="results-artists">
                <MusicList title="Artists">
                    {albums.items.slice(0, 6).map((current, index) => {
                        return (
                            <li className="music-list-item" key={index}>
                                <MusicListDisplayCard coverSrc={current.images[0].url} name={current.name} isArtist="true" artistName={current.artists[0].name} />
                            </li>
                        );
                    })}
                </MusicList>
            </div>
            <div className="results-tracks">
                <MusicList title="Songs">
                    {tracks.items.slice(0, 6).map((current, index) => {
                        return (
                            <li className="music-list-item" key={index}>
                                <MusicListDisplayCard coverSrc={current.album.images[0].url} name={current.name} artistName={current.artists[0].name} />
                            </li>
                        );
                    })}
                </MusicList>
            </div>
        </div>
    );
};

export default ResultsContentDisplay;
