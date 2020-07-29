import React, { Component } from 'react';

import '../css/Search.css';

class Search extends Component {
    render() {
        return (
            <div className="header-search">
                <input type="text" name="search-query" placeholder="Search" />
            </div>
        );
    }
}

export default Search;