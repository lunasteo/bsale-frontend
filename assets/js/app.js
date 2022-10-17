//Importaciones de funciones
import { getProducts, getCategories, getProductsByCategory, searchProductByMatch } from './api.js';
import {createCardProductHtml, createCategoriesHtml} from './htmlCreate.js';
import searchProduct from './searchProduct.js';
import cardUi from './uiCards.js';

//Funcion principal para iniciar la aplicacion
function main() {
    document.addEventListener('DOMContentLoaded', () => {
        createCardProductHtml();
        createCategoriesHtml();
    })
};




//Iniciar aplicacion
main();