//Importaciones de funciones
import { getProducts, getCategories, getProductsByCategory, searchProductByMatch } from './api.js';
import { createCardProductHtml, createCategoriesHtml } from './htmlCreate.js';
import searchProduct from './searchProduct.js';
import cardUi from './uiCards.js';

//Funcion principal para iniciar la aplicacion
function main() {
    document.addEventListener('DOMContentLoaded', () => {
        createCardProductHtml();
        createCategoriesHtml();
    })
};

import cleanHtml from "./deleteHtml.js";
const mainCards = document.querySelector('#container-card')



const formSearch = document.querySelector('#form-search');
const searchInput = document.querySelector('#search-input');

formSearch.addEventListener('submit', async (e) => {
    e.preventDefault();
    const expr = /([^\w\d])+/g;
    let testInput = expr.test(searchInput.value);
    console.log(testInput)
    if (testInput) {
        searchInput.classList.add('border-danger');
        setTimeout(() => {
            searchInput.classList.remove('border-danger');
        }, 3000);
    } else {
        const result = await searchProductByMatch(searchInput.value);
        cleanHtml(mainCards)
        result.forEach(product => {
            console.log(product)
            const { name, url_image, price, discount } = product;
            cardUi(mainCards, url_image, name, price, discount);
        });
    }
})




//Iniciar aplicacion
main();