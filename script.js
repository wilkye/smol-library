const myLibrary = [];

const body = document.getElementById("body");

const modal = document.getElementById("book-modal");
const openBtn = document.getElementById("open-modal-btn");
const closeBtn = document.getElementById("close-modal-btn");

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

function Book(title, author, pageNums, hasRead) {
    if (!new.target) {
        throw Error("You must use the 'new' keyword to call.");
    }
    this.title = title;
    this.author = author;
    this.pageNums = pageNums;
    this.hasRead = hasRead;
    this.info = function () {
        return `${title} by ${author}, ${pageNum} pages, has been read: ${hasRead}`;
    }
}

function addBookToLibrary() {
    // take params, create a book then store it in the array
    console.log(crypto.randomUUID());
}


addBookToLibrary();