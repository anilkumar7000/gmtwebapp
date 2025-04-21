import {store, component} from 'https://cdn.jsdelivr.net/npm/reefjs@12/dist/reef.es.min.js';

// Hold cart data
let cart = store(JSON.parse(localStorage.getItem('cart')) || {});

// Add a photo to the cart
function addToCart (id) {
	cart[id] = true;
	localStorage.setItem('cart', JSON.stringify(cart));	
}

// Check if an item is in the cart
function inCart(id) {
	return cart[id];	
}

// Get the cart count HTML
function cartCountHTML () {
	return `(${Object.keys(cart).length})`;
}

// Remove a photo from the cart
function removeFromCart (id) {
	delete(cart[id]);
	localStorage.setItem('cart', JSON.stringify(cart));
}

// Create cart count component
component('#cart-count', cartCountHTML);

export {addToCart, removeFromCart, inCart};





