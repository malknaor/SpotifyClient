import React from 'react';

import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className="searchbar-container">
            <label className="searchbar-input-label">
                <img className="searchbar-icon" src={require('../../assets/images/searchbar-icon.svg')} alt="searchbar-icon"></img>
                <input className="searchbar-input" onChange={props.onChange} maxLength="80" autoCorrect="off" autoCapitalize="off" placeholder="search artists, songs or podcasts"/>
            </label>
        </div>
    );
}

export default SearchBar;