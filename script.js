const myLibrary = [];
const addedBookIds = [];
const booksContainer = document.querySelector(".books-container")
const bookForm = document.querySelector(".book-form")
const addNewBookBtn = document.querySelector(".new-book-btn")

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
