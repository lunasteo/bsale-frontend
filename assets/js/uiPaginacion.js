const uiPagination = (main, pageNumber) => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    li.classList.add('page-item');

    a.classList.add('page-link');
    a.textContent = pageNumber;

    li.appendChild(a);

    main.appendChild(li);
}

export default uiPagination;


