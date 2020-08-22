import React, { Component } from 'react';

import ProductsData from '../data/productsData.json';

class Products extends Component {
    constructor() {
        super();

        this.state = {
            filter: {
                current: 'Best Sellers',
                currentIndex: 0,
                list: ['Best Sellers', 'Best Price', 'All Products'],
                listHtml: ''
            },
            count: ProductsData.length,
            page: 1,
            list: []
        };

        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);

        this.showFilter = this.showFilter.bind(this);
        this.setFilter = this.setFilter.bind(this);
    }

    getProducts(page) {
        let count = 0;
        let productsList = ProductsData;

        if (this.state.filter.currentIndex != 2) {
            productsList = productsList.filter((product, index) => {
                return (
                    (this.state.filter.currentIndex == 0 && product.top == "true") || 
                    (this.state.filter.currentIndex == 1 && product.hot == "true")
                );
            });
        }

        productsList = productsList.filter(function(product, index) {
            count++;
            return count <= page * 5;
        });

        let list = productsList.map(function(product, index) {
            return (
            <li key={index} className="catalog_product">
                <div className="catalog_product_thumbnail"><img src={product.thumbnail} alt="#" /></div>
                <div className="catalog_product_description">
                    <div className="catalog_product_name">{product.name}</div>
                    <div className="catalog_product_caption">{product.caption}</div>
                    <div className="catalog_product_price">{product.price}</div>
                    <button className="button button_cart"><span></span></button>
                </div>
            </li>);
        });

        this.setState({
            page: page,
            list: list
        });
    }

    firstPage() {
        const firstItem = document.querySelector('.catalog_products_list li:first-child');  
        firstItem.style.marginLeft = "0px";
    }

    prevPage(event) {
        const parent = event.target.closest('.catalog_products');

        if (!parent) return;

        const list = parent.querySelector('.catalog_products_list > ul'),
            firstItem = list.querySelector('li:first-child');

        if (!list || !firstItem) return;
        
        let firstItemStyles = window.getComputedStyle(firstItem);
        let firstItemWidth = firstItem.clientWidth;

        if (firstItemStyles.getPropertyValue('margin-right')) firstItemWidth += parseInt(firstItemStyles.getPropertyValue('margin-right'));

        let currentFirstItemMl = firstItem.style.marginLeft ? Math.abs(parseInt(firstItem.style.marginLeft)) : 0;
        
        if (currentFirstItemMl > 0) firstItem.style.marginLeft = `-${currentFirstItemMl-firstItemWidth}px`;
    }

    nextPage(event) {
        const parent = event.target.closest('.catalog_products');

        if (!parent) return;

        const list = parent.querySelector('.catalog_products_list > ul'),
            countItems = list.querySelectorAll('li').length,
            firstItem = list.querySelector('li:first-child');

        if (!list || !firstItem) return;
        
        let parentWidth = list.clientWidth;
        
        let firstItemStyles = window.getComputedStyle(firstItem);
        let firstItemWidth = firstItem.clientWidth;

        if (firstItemStyles.getPropertyValue('margin-right')) firstItemWidth += parseInt(firstItemStyles.getPropertyValue('margin-right'));

        let firstItemWidthFix = firstItemWidth;

        let currentFirstItemMl = firstItem.style.marginLeft ? Math.abs(parseInt(firstItem.style.marginLeft)) : 0;
        
        if (currentFirstItemMl > 0) firstItemWidth += currentFirstItemMl;

        let stopPount = (countItems*firstItemWidthFix)-parentWidth;

        if (currentFirstItemMl < stopPount) {
            firstItem.style.marginLeft = `-${firstItemWidth}px`;
        } else {
            let nextPage = this.state.page + 1;
            if (nextPage*5 <= this.state.count) this.getProducts(nextPage);
        }
    }

    setFilter = function(event) {
        let filter = +event.target.dataset.filter;

        let currentName = this.state.filter.list[filter];

        if (!currentName) return;

        this.setState({
            filter: {
                ...this.state.filter,
                currentIndex: filter,
                current: currentName
            }
        });

        this.getProducts(1);
        this.firstPage();
    }

    showFilter = function(event) {
        let listHtml = this.state.filter.list.map((name, index) => {
            return (
                <li key={index} data-filter={index} onClick={this.setFilter}>{name}</li>
            );
        });

        this.setState({
            filter: {
                ...this.state.filter,                
                listHtml: listHtml
            }
        });

        const listElem = document.querySelector('.catalog_products_filter_list');
        listElem.classList.toggle('active');

        // listElem.querySelectorAll('a').forEach(a => {
        //     a.addEventListener('click', (event) => {
        //         this.setFilter(event.target.dataset.filter);
        //     });
        // });
    }

    componentDidMount() {
        this.getProducts(this.state.page);
    }

    render() {
        return (
            <div className="catalog_products">
                <div className="catalog_products_header">
                    <div className="catalog_products_filter">
                        <div className="catalog_products_filter_name">
                            {this.state.filter.current}
                        </div>
                        <div className="catalog_products_filter_select">
                            <button onClick={this.showFilter} className="button button_filter_select"><i className="ico_filter"></i></button>
                            <div className="catalog_products_filter_list">
                                <ul>
                                    {this.state.filter.listHtml}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="catalog_products_navigation">
                        <button onClick={this.prevPage} className="button button_navigation_prev"><i className="ico_arrow ico_arrow-left"></i></button>
                        <button onClick={this.nextPage} className="button button_navigation_next"><i className="ico_arrow ico_arrow-right"></i></button>
                    </div>
                </div>
                <div className="catalog_products_list">
                    <ul>
                        {this.state.list}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Products;