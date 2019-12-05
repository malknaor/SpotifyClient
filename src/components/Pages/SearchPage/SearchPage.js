import React from 'react';
import { connect } from 'react-redux';

import { searchContent } from '../../actions/index';
import Page from '../Page';
import SearchBar from '../../SearchBar/SearchBar';
import './SearchPage.css';

class SearchPage extends React.Component {
    componentDidUpdate() {
        console.log(this.props);
    }

    onSearchInputChange = event => {
        if (event.target.value) {
            this.props.searchContent(event.target.value);
        }
    }

    render() {
        return (
            <div className="search-page">
                <Page>
                    <SearchBar onChange={this.onSearchInputChange}/>
                </Page>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return { searchResults: state.search };
};

export default connect(mapStateToProps, { searchContent })(SearchPage);