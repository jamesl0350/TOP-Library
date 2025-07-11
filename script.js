const myLibrary = [];
const addedBookIds = [];
const booksContainer = document.querySelector(".books-container");
const bookForm = document.querySelector(".book-form");
const addNewBookBtn = document.querySelector(".new-book-btn");
const addBookBtn = document.querySelector("#add-new-book");
const formModal = document.querySelector("dialog");
const closeModal = document.querySelector("#close-modal")

// Show form
addNewBookBtn.addEventListener('click', function () {
  bookForm.style.display = 'block';
  formModal.show()
})


//close modal
closeModal.addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector(".book-form").reset();
  formModal.close();
});

// make sure form is complete before adding information to the library array
addBookBtn.addEventListener('click', function(event) {
  event.preventDefault();
  let isFormComplete = document.querySelector('form').checkValidity();
  if (!isFormComplete) {
    document.querySelector('form').reportValidity();
  } else {
    // Get the books details
    const bookTitle = document.getElementById('title');
    const bookAuthor = document.getElementById('author');
    const bookPages = document.getElementById('pages');
    const bookWasRead = document.getElementById('read');
    addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, bookWasRead.checked);
    document.querySelector('form').reset();
    formModal.close();
  }
})


// book constructor
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

// display books
function displayBooks() {
  myLibrary.forEach(book => {
    if (!addedBookIds.includes(book.id)) {
      const bookCard = createBookCard(book);
      booksContainer.appendChild(bookCard)
      addedBookIds.push(book.id)
    }
  });
}

// book card function
function createBookCard(book) {
  const bookCard = document.createElement('div');
  bookCard.classList.add('book-card')
  const bookDetails = document.createElement('div');
  bookDetails.classList.add('book-details')


  // Paragraphs for form fields
  const titleP = document.createElement('p');
  titleP.classList.add('book-title');
  titleP.textContent = `Title: ${book.title}`;

  const authorP = document.createElement('p');
  authorP.classList.add('book-author');
  authorP.textContent = `Author: ${book.author}`;

  const pagesP = document.createElement('p');
  pagesP.classList.add('book-pages');
  pagesP.textContent = `Pages: ${book.pages}`;

  const readP = document.createElement('p');
  readP.classList.add('book-read')
  readP.textContent = `Read Status: ${book.read ? "Read" : "Not read"}`;

  bookDetails.appendChild(titleP)
  bookDetails.appendChild(authorP)
  bookDetails.appendChild(pagesP)
  bookDetails.appendChild(readP)



  // buttons
 
  const bookBtns = document.createElement('div');
  bookBtns.classList.add('book-btns')
  const toggleReadButton = document.createElement('button');
  toggleReadButton.classList.add('toggle-read-button')
  toggleReadButton.id = "toggle-read-button"
  toggleReadButton.textContent = "Toggle read"

  const removeBtn = document.createElement('button');
  removeBtn.classList.add('remove-btn');
  removeBtn.id = 'remove-btn';
  removeBtn.textContent = "Remove"

  bookBtns.append(toggleReadButton, removeBtn);
  bookCard.append(bookDetails, bookBtns);

  removeBtn.addEventListener('click', () => {
    const index = myLibrary.indexOf(book);
    myLibrary.splice(index, 1);
    bookCard.remove();
  });


  return bookCard;


}

function removeBook() {
  const index = myLibrary.indexOf(book);
  myLibrary.splice(index, 1);
  bookCard.remove()
}


addBookToLibrary("Harry Potter", "Cant Remember", 1234, true);
addBookToLibrary("The Hunger Games", "Can't remember either", 1234, true)
addBookToLibrary("Rich Dad Poor Dad", "idk", 374, false);

