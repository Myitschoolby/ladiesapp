import React, { Component } from 'react';

import '../css/Catalog.css';

import Products from './Products';
import Accessories from './Accessories';

class Catalog extends Component {
    render() {
        return (
            <div className="catalog">
                <Products />
                <Accessories />
            </div>
        );
    }
}

export default Catalog;