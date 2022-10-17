import {discountCal, calSaving} from "./discount.js";

const cardUi = (main, url, productName, price, discount) => {
    const divCol = document.createElement('div');
    //Va dentro del divCol
    const divCard = document.createElement('div');
    //Van dentro de divCard
    const imgProduct = document.createElement('img');
    const divCardBody= document.createElement('div');
    //Van dentro de divCardBody
    const h5 = document.createElement('h5');
    const p = document.createElement('p')
    const pDiscount = document.createElement('p');



    

    //Div col
    divCol.classList.add('col')

    //Clases para el div card
    divCard.classList.add('card', 'h-100')

    //La imagen recive la url
    
    imgProduct.setAttribute('src', url);
    if(!url){
        imgProduct.setAttribute('src', 'http://127.0.0.1:5500/assets/img/default.png');
        imgProduct.classList.add('card-img-top', 'img-fluid', 'img-thumbnail');
    }
    //Clases para la imagen
    imgProduct.classList.add('card-img-top', 'img-fluid', 'img-thumbnail');

    //clase para el card body
    divCardBody.classList.add('card-body');

    //Nombre del producto
    h5.textContent = `${productName}`;
    h5.classList.add('card-title');
    
    //Precio del producto
    p.textContent = `Precio: $${price}`;
    p.classList.add('card-text');

    
    //Se agregan encabeza y parrafo al divCarBbody
    divCardBody.appendChild(h5);
    divCardBody.appendChild(p);
    divCardBody.appendChild(pDiscount)

    if(discount > 0){
        pDiscount.classList.add('position-absolute', 'top-0', 'start-1', 'p-3', 'mb-2', 'bg-danger', 'text-white', 'fw-bold', 'mt-3', 'rounded')
        pDiscount.textContent = `${discount}%`
        p.textContent = `Antes $${price}`;
        const pNow = document.createElement('p');
        const pSaving = document.createElement('p');
        p.classList.add('text-decoration-line-through')
        pNow.textContent = `Ahora $${discountCal(price, discount)}`;
        pSaving.textContent = `Ahorro $${calSaving(price, discount)}`
        divCardBody.appendChild(pNow)
        divCardBody.appendChild(pSaving)
    }

    //Se agregan los datos a divCard
    divCard.appendChild(imgProduct);
    divCard.appendChild(divCardBody)

    //Se agrega todo a la card
    divCol.appendChild(divCard);

    //Se agrega la card en el html
    main.appendChild(divCol);

}

export default cardUi;