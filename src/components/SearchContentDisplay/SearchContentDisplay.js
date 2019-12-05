import React from 'react';

import ResultsContentDisplay from './ResultsContentDisplay';
import DefaultContent from './DefaultContent';
import './SearchContentDisplay.css';

class SearchContentDisplay extends React.Component {
    renderSearchResults = () => {
        if (this.props.searchResults) {
            return (
                <ResultsContentDisplay content={this.props.searchResults} />
            );
        } else {
            return (
                <div>Loading Search Results...</div>
            );
        }
    }

    renderDefaultContent = () => {
        if (this.props.defaultContent) {
            return <DefaultContent content={this.props.defaultContent} />;
        } else {
            return (
                <div>Loading Default Content...</div>
            );
        }
    }

    renderContent = () => {
        return !this.props.searchResults ? this.renderDefaultContent() : this.renderSearchResults();
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
