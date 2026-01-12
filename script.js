const myLibrary = [];

const body = document.getElementById("body");

const modal = document.getElementById("book-modal");
const openBtn = document.getElementById("open-modal-btn");
const closeBtn = document.getElementById("close-modal-btn");

const bookForm = document.getElementById("book-form");

const modeBtn = document.getElementById("ld");

openBtn.addEventListener('click', () => {
    modal.showModal();
});

closeBtn.addEventListener('click', () => {
    modal.close();
});

modeBtn.addEventListener('click', () => {
    body.classList.toggle("light");
    console.log("Test");
});

bookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(bookForm);

    const title = formData.get("book-name");
    const author = formData.get("book-author");
    const pageNums = Number(formData.get("pages"));
    const hasRead = formData.get("has-read") === "on";

    addBookToLibrary(title, author, pageNums, hasRead);

    bookForm.reset();
    modal.close();
})

function Book(title, author, pageNums, hasRead) {
    if (!new.target) {
        throw Error("You must use the 'new' keyword to call.");
    }
    this.title = title;
    this.author = author;
    this.pageNums = pageNums;
    this.hasRead = hasRead;
    this.info = function () {
        return `${title} by ${author}, ${pageNums} pages, has been read: ${hasRead}`;
    }
}

function addBookToLibrary(title, author, pageNums, hasRead) {
    const newBook = new Book(title, author, pageNums, hasRead);
    myLibrary.push(newBook);

    createNewBookCard(newBook);

    console.log(myLibrary);
}

function createNewBookCard(book) {
    let container = document.createElement("div");
    container.classList.add("book-container");
    let bookTitle = document.createElement("h2");
    bookTitle.classList.add("book-title");
    let bookAuthor = document.createElement("h3");
    bookAuthor.classList.add("book-author");
    let bookPages = document.createElement("p");
    bookPages.classList.add("book-pages");
    let readBool = document.createElement("p");
    readBool.classList.add("read-bool");

    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = book.pageNums;
    readBool.textContent = book.hasRead;

    container.append(bookTitle, bookAuthor, bookPages, readBool);
    document.querySelector(".container").append(container);
}


addBookToLibrary();