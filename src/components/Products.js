import React, { Component } from 'react';

class Products extends Component {
    render() {
        return (
            <div className="catalog_products">
                <div className="catalog_products_header">
                    <div className="catalog_products_filter">
                        <div className="catalog_products_filter_name">
                            Best Sellers
                        </div>
                        <div className="catalog_products_filter_select">
                            <button className="button button_filter_select"><i className="ico_filter"></i></button>
                        </div>
                    </div>
                    <div className="catalog_products_navigation">
                        <button className="button button_navigation_next"><i className="ico_arrow ico_arrow-left"></i></button>
                        <button className="button button_navigation_prev"><i className="ico_arrow ico_arrow-right"></i></button>
                    </div>
                </div>
                <div className="catalog_products_list">
                    <ul>
                        <li className="catalog_product">
                            <div className="catalog_product_thumbnail"><img src="/images/catalog/pr1.png" alt="#" /></div>
                            <div className="catalog_product_description">
                                <div className="catalog_product_name">Face Mask</div>
                                <div className="catalog_product_caption">Grape Fruit</div>
                                <div className="catalog_product_price">$16,00</div>
                                <button className="button button_cart"></button>
                            </div>
                        </li>
                        <li className="catalog_product">
                            <div className="catalog_product_thumbnail"><img src="/images/catalog/pr1.png" alt="#" /></div>
                            <div className="catalog_product_description">
                                <div className="catalog_product_name">Face Mask</div>
                                <div className="catalog_product_caption">Grape Fruit</div>
                                <div className="catalog_product_price">$16,00</div>
                                <button className="button button_cart"></button>
                            </div>
                        </li>
                        <li className="catalog_product">
                            <div className="catalog_product_thumbnail"><img src="/images/catalog/pr1.png" alt="#" /></div>
                            <div className="catalog_product_description">
                                <div className="catalog_product_name">Face Mask</div>
                                <div className="catalog_product_caption">Grape Fruit</div>
                                <div className="catalog_product_price">$16,00</div>
                                <button className="button button_cart"></button>
                            </div>
                        </li>
                        <li className="catalog_product">
                            <div className="catalog_product_thumbnail"><img src="/images/catalog/pr1.png" alt="#" /></div>
                            <div className="catalog_product_description">
                                <div className="catalog_product_name">Face Mask</div>
                                <div className="catalog_product_caption">Grape Fruit</div>
                                <div className="catalog_product_price">$16,00</div>
                                <button className="button button_cart"></button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Products;