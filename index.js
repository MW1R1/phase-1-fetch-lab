function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(json => renderBooks(json))
    .catch(error => console.error(error));
}

function renderBooks(json) {
  const books = json;
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

fetchBooks();
renderBooks(json);
