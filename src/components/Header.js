import React, { Component } from 'react';

import '../css/Header.css';

import Search from './Search';
import Cart from './Cart';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header_logo"><a href="/" title="Go to home page">Ladies <img src="/images/ico_logo.png" alt="Ladies Shop" /></a></div>

                <Search />
                <Cart />
            </header>
        );
    }
}

export default Header;