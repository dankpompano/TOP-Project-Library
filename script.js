const myLibrary = [];
const listContainer = document.getElementById("item-list");
// const ul = document.createElement("ul");

function Book(title, author, pages, year, genre) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.year = year;
  this.genre = genre;
  id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, year, genre) {
  newBook = new Book(title, author, pages, year, genre);
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
  // listContainer.appendChild(ul);
}
addBookToLibrary("The Silent Echo", "Elena Petrova", 320, 2019, "Mystery");
addBookToLibrary("Neon Ghosts", "Marcus Vance", 412, 2023, "Science Fiction");
addBookToLibrary(
  "Garden of Secrets",
  "Aisha Khan",
  150,
  1998,
  "Historical Fiction",
);
addBookToLibrary(
  "The Last Algorithm",
  "Dr. Alan Grant",
  550,
  2024,
  "Tech Thriller",
);

display(myLibrary);
