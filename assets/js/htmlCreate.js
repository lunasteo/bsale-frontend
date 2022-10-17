import cardUi from './uiCards.js';
import uiNavBar from './uiNavBar.js';
import uiPagination from './uiPaginacion.js';
import { getProducts, getCategories, getProductsByCategory, searchProductByMatch } from './api.js';
import cleanHtml from './deleteHtml.js';

const mainCards = document.querySelector('#container-card')
const mainNav = document.querySelector('#container-nav-bar')
const mainPagination = document.querySelector('#container-paginacion');


//Crear Cards de los productos a mostrar por defecto en HTML.
const createCardProductHtml = async(page = 0) => {
    const products = await getProducts(page);
    products.data.forEach(product => {
        const {name, ulrImage, price, discount} = product;
        cardUi(mainCards, ulrImage, name, price);
    });
    createPagination(products.totalPages);
};

//Se crean las categorias en el nav
const createCategoriesHtml = async() => {
    const categories = await getCategories();
    categories.forEach( category => {
        const { name } = category;
        uiNavBar(mainNav, name);
    })
};

//Crearpaginacion
const createPagination = async(numFinal) => {
    const numlist = Array.from({length: numFinal}, (x, i) => i);
    numlist.forEach(num => {
        uiPagination(mainPagination, num)
    });

    const pageNumber = document.querySelectorAll('.page-item');

    pageNumber.forEach(e => {
        e.addEventListener('click', ()=> {
            createCardProductHtml(e.textContent)
            cleanHtml(mainPagination);
        })
    })

}


export {createCardProductHtml, createCategoriesHtml};