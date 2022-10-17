import cardUi from './uiCards.js';
import uiNavBar from './uiNavBar.js';
import uiPagination from './uiPaginacion.js';
import { getProducts, getCategories, getProductsByCategory, searchProductByMatch } from './api.js';
import cleanHtml from './deleteHtml.js';

const mainCards = document.querySelector('#container-card')
const mainNav = document.querySelector('#container-nav-bar')
const mainPagination = document.querySelector('#container-paginacion');


//Crear Cards de los productos a mostrar por defecto en HTML.
const createCardProductHtml = async (page = 0) => {
    const products = await getProducts(page);
    products.data.forEach(product => {
        let { name, ulrImage, price, discount } = product;
        cardUi(mainCards, ulrImage, name, price, discount);
    });
    createPagination(products.totalPages);

};

//Se crean las categorias en el nav
const createCategoriesHtml = async () => {
    const categories = await getCategories();
    categories.forEach(category => {
        const { id, name } = category;
        uiNavBar(mainNav, name, id);
    })

    goTocategories();

};

//Funcion para mostrar productos de las categorias.
const goTocategories = () => {
    const navNodes = document.querySelectorAll('.nav-link');
    navNodes.forEach(node => {
        
        node.addEventListener('click', async () => {
            cleanHtml(mainCards)
                cleanHtml(mainPagination);
            const data = await getProductsByCategory(node.id)
            data.forEach(product => {
                const { name, ulrImage, price, discount } = product;
                cardUi(mainCards, ulrImage, name, price, discount);
            })
        })
    })


}

//Crearpaginacion
const createPagination = async (numFinal) => {
    const numlist = Array.from({ length: numFinal }, (x, i) => i);
    numlist.forEach(num => {
        uiPagination(mainPagination, num)
    });
    const pageNumber = document.querySelectorAll('.page-item');
    pageNumber.forEach(e => {
        e.addEventListener('click', () => {
            cleanHtml(mainCards)
            createCardProductHtml(e.textContent)
            cleanHtml(mainPagination);
        })
    })

}


export { createCardProductHtml, createCategoriesHtml };