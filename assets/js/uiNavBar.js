const uiNavBar = (main, categoryName, id) => {
    const a = document.createElement('a');

    a.textContent = categoryName;
    a.setAttribute('id', `${id}`);
    

    a.classList.add('nav-link');

    main.appendChild(a);
}

export default uiNavBar;