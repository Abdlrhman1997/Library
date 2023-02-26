let myLibrary = [];

function Book(author, title, noOfPages, readQ) {
  this.author = author;
  this.title = title;
  this.noOfPages = noOfPages;
  this.readQ = readQ;
}

let deepWork = new Book("Cal Newport", "Deep Work", 255, "Read?");

let atomicHabits = new Book("James Clear", "Atomic Habits", 300, "Read?");

function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBookToLibrary(deepWork);
addBookToLibrary(atomicHabits);

let titlec;
let Titlec;
let authorc;
let pagesc;
let submitc;

function submit() {
  let newBook = new Book(authorc.value, Titlec.value, pagesc.value, "Read?");
  addBookToLibrary(newBook);
  displayBooks(myLibrary, myLibrary.length - 1);
  divFormHolder.style.display = "none";
  document.querySelector("#overlay").style.display = "none";
}

function popUpForm() {
  let divForm = document.createElement("div");
  let form = document.createElement("forum");
  let title = document.createElement("p");
  title.innerText = "Add new book";
  divForm.id = "divForm";
  form.id = "form";

  let Title = document.createElement("input");
  let author = document.createElement("input");
  let pages = document.createElement("input");

  Title.type = "text";
  author.type = "text";

  pages.type = "number";
  pages.min = "0";
  pages.oninput = "validity.valid||(value='')";

  Titlec = Title;
  titlec = title;
  authorc = author;
  pagesc = pages;

  let submit = document.createElement("button");
  submitc = submit;
  submit.innerText = "Submit";
  title.innerText = "Add new book";
  Title.placeholder = "Title";
  author.placeholder = "Author";
  pages.placeholder = "pages";

  form.append(title);
  form.append(Title);
  form.append(author);
  form.append(pages);
  form.append(submit);
  divForm.append(form);

  divForm.style.display = "none";
  document.body.append(divForm);
}
popUpForm();
let divFormHolder = document.querySelector("#divForm");

let addBttn = document.querySelector("#add");
let overlay = document.querySelector("#overlay");
addBttn.addEventListener("click", function () {
  divFormHolder.style.display = "initial";
  overlay.classList.add("active");
  overlay.style.display = "initial";
});

window.onload = function () {
  document.onclick = function (e) {
    if (
      e.target.id !== "divForm" &&
      e.target.id !== "add" &&
      e.target.id !== "form" &&
      e.target !== titlec &&
      e.target !== Titlec &&
      e.target !== authorc &&
      e.target !== pagesc &&
      e.target !== submitc
    ) {
      divFormHolder.style.display = "none";
      document.querySelector("#overlay").style.display = "none";
    }
  };
};

submitc.addEventListener("click", submit);

let divCardsContainer = document.querySelector("#container");
function displayBooks(libraryArray, count) {
  for (let i = count; i < libraryArray.length; i++) {
    let card = document.createElement("div");
    let title = document.createElement("p");
    let author = document.createElement("p");
    let noOfPages = document.createElement("p");
    let readQ = document.createElement("p");
    let img = document.createElement("img");
    let label = document.createElement("label");
    let input = document.createElement("input");
    let span = document.createElement("span");

    label.className = "switch";
    input.type = "checkbox";
    span.classList.add("slider", "round");

    label.append(input);
    label.append(span);

    img.src = "false.png";
    title.id = "title";

    author.innerText = "By: ";
    noOfPages.innerText = "pages: ";

    title.innerText = libraryArray[i].title;
    author.innerText += libraryArray[i].author;
    noOfPages.innerText += libraryArray[i].noOfPages;
    readQ.innerText = libraryArray[i].readQ;

    card.append(img);
    card.append(title);
    card.append(author);
    card.append(noOfPages);
    card.append(readQ);
    card.append(label);

    divCardsContainer.append(card);

    img.addEventListener("click", function () {
      card.remove();
    });

    input.addEventListener("click", function () {
      if (card.style.backgroundColor === "blanchedalmond") {
        card.style.backgroundColor = "#E96479";
        readQ.innerText = "Read: ❌";
      } else {
        card.style.backgroundColor = "blanchedalmond";
        readQ.innerText = "Read: ✔️";
      }
    });
  }
}

displayBooks(myLibrary, 0);
