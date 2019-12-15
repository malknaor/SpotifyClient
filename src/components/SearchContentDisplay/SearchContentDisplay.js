import React from 'react';

import ResultsContentDisplay from './ResultsContentDisplay';
import DefaultContent from './DefaultContent';
import './SearchContentDisplay.css';

class SearchContentDisplay extends React.Component {
    renderSearchResults = () => {
        const {deviceId, onItemClick, searchResults } = this.props;

        if (searchResults) {
            return (
                <ResultsContentDisplay 
                    deviceId={deviceId} 
                    onItemClick={onItemClick} 
                    content={searchResults} 
                />
            );
        }
    }

    renderDefaultContent = () => {
        const {deviceId, onItemClick, defaultContent } = this.props;

        if (defaultContent) {
            return (
                <DefaultContent 
                    deviceId={deviceId} 
                    onItemClick={onItemClick} 
                    content={defaultContent} 
                />
            );
        }
    }

    renderContent = () => {
        const { searchResults } = this.props;
        
        return !searchResults ? this.renderDefaultContent() : this.renderSearchResults();
    }

    render() {
        return (
            <div className="search-content-container">
                {this.renderContent()}
            </div>
        );
    }
}

export default SearchContentDisplay;
