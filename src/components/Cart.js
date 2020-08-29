import React, { useContext } from 'react';

import '../css/Cart.css';

import {Context} from '../App';

function Cart() {
    const {cart} = useContext(Context);

    return(
        <div className="header_cart">
            <button className="header_cart_button"></button>
            <div className="header_cart_couter">
                {cart.counter}
            </div>
        </div>
    );
}

export default Cart;