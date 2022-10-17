const urlBaseDev = 'http://localhost:4000/api';
const urlBaseProd = '';

//Obtener todos los productos
const getProducts = async (id = 0) => {
    const url = `${urlBaseDev}/products?page=${id}`
    const res = await fetch(url);
    const data = await res.json()
    return data
};

//Obtener lista de categorias
const getCategories = async() => {
    const url = `${urlBaseDev}/category`;
    const res = await fetch(url);
    const data = await res.json();
    return data
};

//Obtener los productos segun la categoria.
const getProductsByCategory = async(id) => {
    const url = `${urlBaseDev}/category/{id}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.data.products;
};

//Buscar un producto.
const searchProductByMatch = async(nameProduct) => {
    const url = `${urlBaseDev}/products/search/${nameProduct}`;
    const res = await fetch(url);
    console.log(`buscando ${nameProduct}`);
    const data = await res.json();
    return data;
};
export { getProducts, getCategories, getProductsByCategory, searchProductByMatch }