import React, { useState, useEffect, useContext } from 'react';

import './css/App.css';

import Header from './components/Header';
import Main from './components/Main';

export const Context = React.createContext();

function App() {
	const [cart, setCart] = useState({
        counter: 0,
        list: []
	});

	const localStorageCartGet = function() {
		let list = localStorage.getItem('cartList');
		if (!list) return;

		list = list.split(';')

		if (list.length === 0) return;

		setCart({
			counter: list.length,
			list: list
		});
	};

	const localStorageCartSet = function() {
		localStorage.setItem('cartList', cart.list.join(';'));
	};

	const addCart = function(productId) {
		let list = cart.list;
		
		if (list.indexOf(productId) === -1) list.push(productId);
		else list.splice(list.indexOf(productId), 1);

        setCart({
            counter: list.length,
            list: list
		});

		localStorageCartSet();
	};

	useEffect(() => {
		localStorageCartGet();
	}, [cart.counter]);
	
	return (
		<Context.Provider value={{addCart, cart}}>
		<div className="app">
			<Header />
			<Main />
		</div>
		</Context.Provider>
	);
}

export default App;