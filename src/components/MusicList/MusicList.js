import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/MusicList.css';

const MusicList = props => {
    console.log(props);

    if (!props.items) {
        return <div><h3>Loading...</h3></div>    
    }

    return (
        <div className="list-wrapper">
            <h3 className="list-title">{props.title}</h3>
            <ul className="music-list">
                {props.items.slice(0, 5).map(({ track }, index) => {
                    return (
                        <li className="music-list-item" key={index}>
                            <Link className="item-image-link" to="/">
                                <img className="album-cover" src={track.album.images[0].url} alt="album cover"></img>
                                <img className="album-middle" src={require('../../assets/images/play.svg')} alt="album middle"></img>                                        
                            </Link>
                            <Link className="item-name-link" to={`/${track.name}`}>
                                <p className="track-name">{track.name}</p>  
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default MusicList;