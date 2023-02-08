let myLibrary = [];

function Book(author, title, noOfPages, readQ) {
  this.author = author;
  this.title = title;
  this.noOfPages = noOfPages;
  this.readQ = readQ;
}

let deepWork = new Book("Cal Newport", "Deep Work", 255, true);

function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBookToLibrary(deepWork);
console.log(myLibrary);

function displayBooks() {}
