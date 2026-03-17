const myLibrary = [];
const listContainer = document.getElementById("item-list");
// const ul = document.createElement("ul");

function Book(title, author, pages, year, genre, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.year = year;
  this.genre = genre;
  this.read = read;
  id = crypto.randomUUID();
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function addBookToLibrary(title, author, pages, year, genre, read) {
  newBook = new Book(title, author, pages, year, genre, read);
  myLibrary.push(newBook);
}

function display(array) {
  array.forEach((book, index) => {
    const listItem = document.createElement("li");
    listItem.id = `book-${index}`;
    listItem.textContent = `Title: ${book.title}\nAuthor: ${book.author}\nPages: ${book.pages}\nYear: ${book.year}\nGenre: ${book.genre}\nRead: ${book.read}`;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = `Delete ${book.title}`;

    deleteButton.addEventListener("click", function () {
      listItem.remove();
    });

    const readButton = document.createElement("button");
    readButton.classList.add("read-btn");
    readButton.textContent = "Mark as read";

    readButton.addEventListener("click", function () {
      book.toggleRead();
      readButton.textContent = book.read ? "Mark as unread" : "Mark as read";
      listItem.textContent = `Title: ${book.title}\nAuthor: ${book.author}\nPages: ${book.pages}\nYear: ${book.year}\nGenre: ${book.genre}\nRead: ${book.read}`;
      listItem.appendChild(deleteButton);
      listItem.appendChild(readButton);
    });
    listItem.appendChild(readButton);
    listItem.appendChild(deleteButton);
    listContainer.appendChild(listItem);
  });
}

addBookToLibrary(
  "The Silent Echo",
  "Elena Petrova",
  320,
  2019,
  "Mystery",
  false,
);
addBookToLibrary(
  "Neon Ghosts",
  "Marcus Vance",
  412,
  2023,
  "Science Fiction",
  false,
);
addBookToLibrary(
  "Garden of Secrets",
  "Aisha Khan",
  150,
  1998,
  "Historical Fiction",
  false,
);
addBookToLibrary(
  "The Last Algorithm",
  "Dr. Alan Grant",
  550,
  2024,
  "Tech Thriller",
  false,
);

display(myLibrary);
