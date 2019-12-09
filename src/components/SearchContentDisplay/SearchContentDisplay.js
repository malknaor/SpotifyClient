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
        }
    }

    renderDefaultContent = () => {
        if (this.props.defaultContent) {
            return <DefaultContent content={this.props.defaultContent} />;
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
