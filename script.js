const myLibrary = [];

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
}
