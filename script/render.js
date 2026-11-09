import {getData} from './api.js';


export async function renderProducts(products) {
    const divProductos = document.querySelector('.div-productos');
    divProductos.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('article');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <div class="product-image">
            <img src="./img/${product.image}" alt="${product.name}">
            </div>
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <h3>$${product.price}</h3>
            <button>Agregar</button>
        `;
        divProductos.appendChild(productDiv);
    }); 
}

async function showProducts() {
    const products = await getData();
    renderProducts(products)
}

showProducts();
