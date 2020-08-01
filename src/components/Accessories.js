import React, { Component } from 'react';

class Accessories extends Component {
    render() {
        return (
            <div className="catalog_accessories">
                <div className="catalog_accessories_header">
                        Accessories
                </div>
                <div className="catalog_accessories_list">
                    <ul>
                        <li className="catalog_accessory_block">
                            <div className="catalog_accessory">
                                <div className="catalog_accessory_price">$19,00</div>
                                <div className="catalog_accessory_thumbnail"><img src="/images/catalog/acc1.png" alt="#" /></div>
                                <div className="catalog_accessory_description">
                                    <div className="catalog_accessory_name">Comb 2.0</div>
                                    <div className="catalog_accessory_caption">Original Version</div>
                                </div>
                            </div>
                        </li>
                        <li className="catalog_accessory_block">
                            <div className="catalog_accessory">
                                <div className="catalog_accessory_price">$19,00</div>
                                <div className="catalog_accessory_thumbnail"><img src="/images/catalog/acc2.png" alt="#" /></div>
                                <div className="catalog_accessory_description">
                                    <div className="catalog_accessory_name">Watch+</div>
                                    <div className="catalog_accessory_caption">Trending 2020</div>
                                </div>
                            </div>
                        </li>
                        <li className="catalog_accessory_block">
                            <div className="catalog_accessory">
                                <div className="catalog_accessory_price">$19,00</div>
                                <div className="catalog_accessory_thumbnail"><img src="/images/catalog/acc3.png" alt="#" /></div>
                                <div className="catalog_accessory_description">
                                    <div className="catalog_accessory_name">Camera	&#174;</div>
                                    <div className="catalog_accessory_caption">Classic 1992</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default Accessories;