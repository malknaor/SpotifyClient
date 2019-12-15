import React from "react";

import MusicList from "../MusicList/MusicList";
import MusicListDisplayCard from "../MusicList/MusicListDisplayCard";
import SongsLists from "../SongsList.js/SongsList";
import './ResultsContentDisplay.css';

const ResultsContentDisplay = props => {
    const { deviceId, onItemClick } = props;
    const { albums, tracks } = props.content;

    if (albums.items.length > 0 && tracks.items.length > 0) {
        return (
            <div className="results-content">
                <div className="leading-result">
                    <div className="top-artist-result">
                        <MusicList title="Top result">
                            <MusicListDisplayCard
                                itemData={albums.items[0]}
                                coverSrc={albums.items[0].images[0].url}
                                name={albums.items[0].name}
                                isArtist="true"
                                artistName={albums.items[0].artists[0].name}
                                onItemClick={onItemClick}
                                deviceId={deviceId}
                            />
                        </MusicList>
                    </div>
                    <div className="top-artist-tracks">
                        <SongsLists
                            title="Related tracks"
                            artistId={albums.items[0].artists[0].id}
                            onItemClick={onItemClick}
                            deviceId={deviceId}
                        />
                    </div>
                </div>
                <div className="results-artists">
                    <MusicList title="Artists">
                        {albums.items.slice(0, 6).map((current, index) => {
                            return (
                                <li className="music-list-item" key={index}>
                                    <MusicListDisplayCard
                                        itemData={current}
                                        coverSrc={current.images[0].url}
                                        name={current.name}
                                        isArtist="true"
                                        artistName={current.artists[0].name}
                                        onItemClick={onItemClick}
                                        deviceId={deviceId}
                                    />
                                </li>
                            );
                        })}
                    </MusicList>
                </div>
                <div className="results-tracks">
                    <MusicList title="Tracks">
                        {tracks.items.slice(0, 6).map((current, index) => {
                            return (
                                <li className="music-list-item" key={index}>
                                    <MusicListDisplayCard
                                        itemData={current}
                                        coverSrc={current.album.images[0].url}
                                        name={current.name}
                                        artistName={current.artists[0].name}
                                        onItemClick={onItemClick}
                                        deviceId={deviceId}
                                    />
                                </li>
                            );
                        })}
                    </MusicList>
                </div>
            </div>
        );
    } else {
        return (
            <div className="results-content">
                <h3>No results found...</h3>
            </div>
        );
    }
};

export default ResultsContentDisplay;
