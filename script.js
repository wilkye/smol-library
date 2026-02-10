let myLibrary = [];

const body = document.getElementById("body");
const globalMess = document.getElementById("book-warn");

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

function displayBooks() {
    globalMess.innerHTML = "";

    if (myLibrary.length === 0) {
        globalMess.innerHTML =
            `<p>You don't have any books yet... Add one?</p>`;
        return;
    }
}

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
    this.id = crypto.randomUUID();
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
    displayBooks();

    console.log(myLibrary);
}

function createNewBookCard(book) {
    let container = document.createElement("div");
    container.classList.add("book-container");
    container.dataset.id = book.id;
    let bookTitle = document.createElement("h2");
    bookTitle.classList.add("book-title");
    let bookAuthor = document.createElement("h3");
    bookAuthor.classList.add("book-author");
    let bookPages = document.createElement("p");
    bookPages.classList.add("book-pages");
    let readBool = document.createElement("p");
    readBool.classList.add("read-bool");

    let actions = document.createElement("div");
    actions.classList.add("book-actions");
    let readBtn = document.createElement("button");
    readBtn.textContent = "Toggle Read";
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    readBtn.classList.add("book-btn", "primary");
    deleteBtn.classList.add("book-btn", "danger");

    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = `${book.pageNums} pages`;

    if (book.hasRead) {
        readBool.textContent = "Has read";
        readBool.style.color = "green";
    } else {
        readBool.textContent = "Has not read";
        readBool.style.color = "red";
    }

    deleteBtn.addEventListener("click", () => {
        myLibrary = myLibrary.filter(b => b.id !== book.id);
        container.remove();
        displayBooks();
    })

    readBtn.addEventListener("click", () => {
        book.hasRead = !book.hasRead;
        if (book.hasRead) {
            readBool.textContent = "Has read";
            readBool.style.color = "green";
        } else {
            readBool.textContent = "Has not read";
            readBool.style.color = "red";
        }
    })

    actions.append(readBtn, deleteBtn);
    container.append(bookTitle, bookAuthor, bookPages, readBool, actions);
    document.querySelector(".books").append(container);
}

displayBooks();

addBookToLibrary("Atomic Habits", "James Clear", 257, true);
addBookToLibrary("Atomic Habits", "James Clear", 257, false);
addBookToLibrary("Atomic Habits", "James Clear", 257, true);
addBookToLibrary("Atomic Habits", "James Clear", 257, true);