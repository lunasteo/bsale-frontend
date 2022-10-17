import { searchProductByMatch } from "./api.js";
import cleanHtml from "./deleteHtml.js";
import cardUi from "./uiCards.js";
const mainCards = document.querySelector('#container-card')


const searchProduct = () => {

    const formSearch = document.querySelector('#form-search');
    const searchInput = document.querySelector('#search-input');

    formSearch.addEventListener('submit', async (e) => {
        e.preventDefault();
        const expr = /([^\w\d])+/g;
        let testInput = expr.test(searchInput.value);
        console.log(testInput)
        if (testInput || searchInput === '') {
            searchInput.classList.add('border-danger');
            setTimeout(() => {
            searchInput.classList.remove('border-danger');
            }, 3000);
        } else {
            const result = await searchProductByMatch(searchInput.value);
            cleanHtml(mainCards)
            result.forEach(product => {
                const { name, url_image, price, discount } = product;
                cardUi(mainCards, url_image, name, price);
            });
        }
    })

}

export default searchProduct;