let myLibrary = [];

function Book(author, title, noOfPages, readQ) {
  this.author = author;
  this.title = title;
  this.noOfPages = noOfPages;
  this.readQ = readQ;
}

let deepWork = new Book("Cal Newport", "Deep Work", 255, true);
let atomicHabits = new Book("James Clear", "Atomic Habits", 300, false);

function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBookToLibrary(deepWork);
addBookToLibrary(atomicHabits);

let divCardsContainer = document.querySelector("#container");
function displayBooks(libraryArray) {
  for (let i = 0; i < libraryArray.length; i++) {
    let card = document.createElement("div");
    let title = document.createElement("p");
    let author = document.createElement("p");
    let noOfPages = document.createElement("p");
    let readQ = document.createElement("p");

    title.style.marginLeft = "25%";
    title.style.marginBottom = ".2em";
    title.style.color = "purple";
    title.style.fontSize = "1.4em";

    author.innerText = "By: ";
    noOfPages.innerText = "no of pages: ";

    title.innerText = libraryArray[i].title;
    author.innerText += libraryArray[i].author;
    noOfPages.innerText += libraryArray[i].noOfPages;
    readQ.innerText = libraryArray[i].readQ;

    card.append(title);
    card.append(author);
    card.append(noOfPages);
    card.append(readQ);

    divCardsContainer.append(card);
  }
}

displayBooks(myLibrary);
