const myLibrary = [];

const modal = document.getElementById("book-modal");
const openBtn = document.getElementById("open-modal-btn");
const closeBtn = document.getElementById("close-modal-btn");

openBtn.addEventListener('click', () => {
    modal.showModal();
});

closeBtn.addEventListener('click', () => {
    modal.close();
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