const cardUi = (main, url, productName, price) => {
    const divCol = document.createElement('div');
    //Va dentro del divCol
    const divCard = document.createElement('div');
    //Van dentro de divCard
    const imgProduct = document.createElement('img');
    const divCardBody= document.createElement('div');
    //Van dentro de divCardBody
    const h5 = document.createElement('h5');
    const p = document.createElement('p')

    //Div col
    divCol.classList.add('col')

    //Clases para el div card
    divCard.classList.add('card,h-100')

    //La imagen recive la url
    imgProduct.setAttribute('src', url);
    //Clases para la imagen
    imgProduct.classList.add('card-img-top');

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

    //Se agregan los datos a divCard
    divCard.appendChild(imgProduct);
    divCard.appendChild(divCardBody)

    //Se agrega todo a la card
    divCol.appendChild(divCard);

    //Se agrega la card en el html
    main.appendChild(divCol);

}

export default cardUi;