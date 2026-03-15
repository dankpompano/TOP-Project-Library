const myLibrary = [];
const listContainer = document.getElementById("item-list");

function Book(title, author, pages, year, genre) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.year = year;
  this.genre = genre;
  id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, year, genre) {
  newBook = Book.new(title, author, pages, year, genre);
  myLibrary.push(newBook);
}

function display(array) {
  array.forEach((book) => {
    const listItem = document.createElement("li");
    listItem.textContent =
      "Title: " +
      book.title +
      "\n" +
      "Author: " +
      book.author +
      "\n" +
      "Pages: " +
      book.pages +
      "\n" +
      "Year: " +
      book.year +
      "\n" +
      "Genre: " +
      book.genre;
    listContainer.appendChild(listItem);
  });
}
addBookToLibrary("The Hobbit", "JRR Tolkien", "200", "1998", "Fantasy");
