import React, { Component } from 'react';

class Products extends Component {
    render() {
        return (
            <div className="catalog_products">
                <div className="catalog_products_header">
                    <div className="catalog_products_filter"></div>
                    <div className="catalog_products_navigation"></div>
                </div>
                <div className="catalog_products_list">
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Products;