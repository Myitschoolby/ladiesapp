import React, { Component, useContext } from 'react';

import '../css/Search.css';

import {Context} from '../App';

function Search() {
    const {find} = useContext(Context);

    return (
        <div className="header-search">
            <input onInput={function(event) {
                find(event.target.value);
            }} type="text" name="search-query" placeholder="Search" />
        </div>
    );
}

export default Search;