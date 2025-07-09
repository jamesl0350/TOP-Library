const myLibrary = [];
const addedBookIds = [];
const booksContainer = document.querySelector(".books-container");
const bookForm = document.querySelector(".book-form");
const addNewBookBtn = document.querySelector(".new-book-btn");
const dialog = document.querySelector(".book-form-dialog");
const bookSubmitBtn = document.querySelector(".dialog-submit-btn");

addNewBookBtn.addEventListener('click', function () {
  bookForm.style.display = 'block';
  dialog.show()
})

bookSubmitBtn.addEventListener('click', function() {
  event.preventDefault();
})

function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}

function addBookToLibrary(title, author, pages, read) {
  const id = crypto.randomUUID();
  const newBook = new Book(title, author, pages, read, id);
  myLibrary.push(newBook);
  displayBooks();
}

function displayBooks() {
  myLibrary.forEach(book => {
    if (!addedBookIds.includes(book.id)) {
      const bookCard = createBookCard(book);
      booksContainer.appendChild(bookCard)
      addedBookIds.push(book.id)
    }
  });
}

function createBookCard(book) {
  const bookCard = document.createElement('div');
  bookCard.classList.add('bookCard')
  const bookDetails = document.createElement('div');
  bookDetails.classList.add('bookDetails')


  // Paragraphs for form fields
  const titleP = document.createElement('p');
  titleP.classList.add('book-title');
  titleP.textContent = book.title;

  const authorP = document.createElement('p');
  authorP.classList.add('book-author');
  authorP.textContent = book.author;
}
