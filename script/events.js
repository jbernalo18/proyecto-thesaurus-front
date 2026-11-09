import {serchProducts} from './api.js';
import {renderProducts} from './render.js'
const buttonSearch = document.getElementById('search-button');
const searchBar= document.getElementById('search-bar');

buttonSearch.addEventListener('click', async () => {
    const searchTerm = searchBar.value.trim();
    const search= await serchProducts(searchTerm);
    console.log(search);
    renderProducts(search);
})


