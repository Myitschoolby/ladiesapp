import React, { useState, useEffect, useContext } from 'react';

import ProductsData from '../data/productsData.json';

import {Context} from '../App';

function Products() {
    const {addCart, cart} = useContext(Context);

    const [filter, setFilter] = useState({
        current: 'Best Sellers',
        currentIndex: 0,
        list: ['Best Sellers', 'Best Price', 'All Products'],
        listHtml: ''
    });

    const [products, setProducts] = useState({
        count: ProductsData.length,
        page: 1,
        list: []
    });

    const getProducts = function(page) {
        let count = 0;
        let productsList = ProductsData;

        if (filter.currentIndex !== 2) {
            productsList = productsList.filter((product, index) => {
                return (
                    (filter.currentIndex === 0 && product.top === "true") || 
                    (filter.currentIndex === 1 && product.hot === "true")
                );
            });
        }

        productsList = productsList.filter(function(product, index) {
            count++;
            return count <= page * 5;
        });

        const clickButton = (event, index) => {
            let elem = event.target;

            if (elem.nodeName == 'SPAN') elem = elem.closest('.button_cart');

            elem.classList.toggle('added'); 
            addCart(index);
        };


        let list = productsList.map(function(product, index) {
            return (
            <li key={index} className="catalog_product">
                <div className="catalog_product_thumbnail"><img src={product.thumbnail} alt="#" /></div>
                <div className="catalog_product_description">
                    <div className="catalog_product_name">{product.name}</div>
                    <div className="catalog_product_caption">{product.caption}</div>
                    <div className="catalog_product_price">{product.price}</div>
                    <button onClick={(event) => { clickButton(event, index); }} className={cart.list.indexOf(index) != -1 ? "button button_cart added" : "button button_cart"}><span></span></button>
                </div>
            </li>);
        });

        setProducts({
            ...products,
            page: page,
            list: list
        });
    };

    const firstPage = function() {
        const firstItem = document.querySelector('.catalog_products_list li:first-child');  
        firstItem.style.marginLeft = "0px";
    }

    const changeFilter = function(event) {
        let filterIndex = +event.target.dataset.filter;

        let currentName = filter.list[filterIndex];

        if (!currentName) return;

        setFilter({
            ...filter,
            currentIndex: filterIndex,
            current: currentName
        });

        getProducts(1);
        firstPage();
    };

    const showFilter = function() {
        let listHtml = filter.list.map((name, index) => {
            return (
                <li key={index} data-filter={index} onClick={changeFilter}>{name}</li>
            );
        });

        setFilter({
            ...filter,
            listHtml: listHtml
        });

        const listElem = document.querySelector('.catalog_products_filter_list');
        listElem.classList.toggle('active');
    };

    const prevPage = function(event) {
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

    const nextPage = function(event) {
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
            let nextPage = products.page + 1;
            if (nextPage*5 <= products.count) getProducts(nextPage);
        }
    }

    useEffect(() => {
        getProducts(products.page);
    }, []);

    return (
        <div className="catalog_products">
            <div className="catalog_products_header">
                <div className="catalog_products_filter">
                    <div className="catalog_products_filter_name">
                        {filter.current}
                    </div>
                    <div className="catalog_products_filter_select">
                        <button onClick={showFilter} className="button button_filter_select"><i className="ico_filter"></i></button>
                        <div className="catalog_products_filter_list">
                            <ul>
                                {filter.listHtml}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="catalog_products_navigation">
                    <button onClick={prevPage} className="button button_navigation_prev"><i className="ico_arrow ico_arrow-left"></i></button>
                    <button onClick={nextPage} className="button button_navigation_next"><i className="ico_arrow ico_arrow-right"></i></button>
                </div>
            </div>
            <div className="catalog_products_list">
                <ul>
                    {products.list}
                </ul>
            </div>
        </div>
    );
}

export default Products;