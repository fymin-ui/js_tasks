function Book(title, author){
    this.title=title;
    this.author=author;
}

let book_1= new Book('1984', 'Orwell');

Book.prototype.getInfo = function() {
    return `Title: "${this.title}", Author: ${this.author}`;
}

alert(book_1.getInfo());