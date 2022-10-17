//Eliminar las cards de los productos.
const cleanHtml = (container) => {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

export default cleanHtml;