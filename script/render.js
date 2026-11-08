import {getData} from './api.js';


export async function renderProducts(products) {
    const divProductos = document.querySelector('.div-productos');
    divProductos.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('article');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="./img/${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
        `;
        divProductos.appendChild(productDiv);
    }); 
}

async function showProducts() {
    const products = await getData();
    renderProducts(products)
}

showProducts();
