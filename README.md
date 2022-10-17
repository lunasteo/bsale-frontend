# ecommerce APP

## Descripcion

Aplicacion frontend para el consumo de API de productos de un ecommerce. 

## Deploy

github pages [https://lunasteo.github.io/bsale-frontend/]

## Tecnologias

Aplicacion creada con html, css3, bootstrap y vainilla javascript.

## Como funciona

La aplicacion via fetch realiza consultas a la API para obtener los datos, esta dividia en modulos.

-app.js

Esta archivo inicia la aplicacion.

- api.js
Es el encargado de realizar las consultas a los diferentes endpoint de la APi

funcion que espera que el documento este cargado para poder solicitar los datos a la API y crear las cards con productos y las categorias

-  getProducts

Funcion que trae todos los productos disponibles en la API, paginados.

- getCategories

Funcion que trae las categorias disponibles.

- getProductsByCategory

Funcion para traer los productos asociados a una categoria, se debe indicar el id de la categoria.

- crearCategories

Funcion que renderiza las categorias en el html.

- createCategoriesHtml

esta funcion crea la estructura HTML para que luego sea renderiza con crearCategories. Se le debe pasar los parametros idCategory y nameCategory.

- searchProductByMatch

Esta Funcion realiza una busqueda segun un string.

- deleteHtml.js

Este archivo tiene la funcion cleanHtml, la cual borra los registros antiguos, renderizando los nuevo. Se le debe indicar donde se quiere hacer esto.

-discount.js

Este archivo cuenta con 2 funciones

discountCal, el cual recibe dos parametro price, discount. Calculando cual es precio luego de aplicar el descuento.

price, discount, el cual recibe dos parametro price, discount. Calculando cual es ahorro.

- htmlCreate.js

Este archivo cuenta con funciones que luego de realizar la consulta a la api, tomando los datos y los renderizan en la pagina, segun lo creado en UI.

- createCardProductHtml

Esta funcion crea las cards y genera la paginacion de los productos.

- createCategoriesHtml

Esta funcion crea las categorias en la navbar.

- goTocategories

Esta funcion permite que al hacer click en las categorias estas generen las cards con los productos asociados.