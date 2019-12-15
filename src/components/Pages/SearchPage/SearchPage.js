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
import { debounce } from '../../../utils/jsUtils';

class SearchPage extends React.Component {

    componentDidMount() {
        this.props.getDefaultSearchPageContent();
    }

    onSearchInputChange = debounce(searchTerm => {
        if (searchTerm) {
            this.props.deleteSearchResults();
            this.props.deleteArtistTracks();
            this.props.searchContent(searchTerm);
        }
    }, 300);

    render() {
        return (
            <div className="search-page">
                <Page>
                    <SearchBar onChange={event => this.onSearchInputChange(event.target.value)} />
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
