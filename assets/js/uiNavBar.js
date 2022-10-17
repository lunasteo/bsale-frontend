const uiNavBar = (main, categoryName) => {
    const a = document.createElement('a');

    a.textContent = categoryName;
    a.setAttribute('href', '#');

    a.classList.add('nav-link');

    main.appendChild(a);
}

export default uiNavBar;