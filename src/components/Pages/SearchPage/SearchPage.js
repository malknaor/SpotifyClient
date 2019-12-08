import React from 'react';
import { connect } from 'react-redux';

import Page from '../Page';
import { 
    searchContent,
    getDefaultSearchPageContent,
    deleteArtistTracks,
    deleteSearchResults 
} from '../../actions/index';
import SearchContentDisplay from '../../SearchContentDisplay/SearchContentDisplay';
import SearchBar from '../../SearchBar/SearchBar';
import './SearchPage.css';

class SearchPage extends React.Component {
    componentDidMount() {
        this.props.getDefaultSearchPageContent();
    }

    onSearchInputChange = event => {
        if (event.target.value) {
            this.props.deleteSearchResults();
            this.props.deleteArtistTracks();
            this.props.searchContent(event.target.value);
        } 
    }

    render() {
        return (
            <div className="search-page">
                <Page>
                    <SearchBar onChange={this.onSearchInputChange} />
                    <SearchContentDisplay 
                        searchResults={this.props.searchResults} 
                        defaultContent={this.props.defaultContent}
                        />
                </Page>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        searchResults: state.search.searchResults,
        defaultContent: state.search.defaultContent
    };
};

export default connect(mapStateToProps, {
    searchContent,
    getDefaultSearchPageContent,
    deleteArtistTracks,
    deleteSearchResults
})(SearchPage);
