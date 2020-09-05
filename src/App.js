import React, { useState, useEffect, useContext } from 'react';

import './css/App.css';

import Header from './components/Header';
import Main from './components/Main';

export const Context = React.createContext();

function App() {
	const [search, setSearch] = useState('');

	const [cart, setCart] = useState(function() {
		const obj = {
			counter: 0,
			list: []
		};

		let list = localStorage.getItem('cartList');
		if (!list) return obj;

		list = list.split(';');
		if (list.length === 0) return obj;

		let listInt = [];
		listInt = list.map(function(value) {
			return parseInt(value);
		});

		return {
			counter: list.length,
			list: listInt
		};
	});

	const addCart = function(productId) {
		let status = false;

		let list = cart.list;

		if (list.indexOf(productId) === -1) {
			list.push(productId);
			status = true;
		} else {
			list.splice(list.indexOf(productId), 1);
		}

        setCart({
            counter: list.length,
            list: list
		});

		return status;
	};

	const find = function(query) {
		setSearch(query);
	};

	useEffect(() => {
		localStorage.setItem('cartList', cart.list.join(';'));
	}, [cart.counter]);
	
	return (
		<Context.Provider value={{addCart, cart, search, find}}>
		<div className="app">
			<Header />
			<Main />
		</div>
		</Context.Provider>
	);
}

export default App;