"use strict";

class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }
    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(`Book "${this.title}" has been issued.`);
        } else {
            console.log(`Book "${this.title}" is already issued.`);
        }
    }
    returnBook() {
        if (this.isIssued) {
            this.isIssued = false;
            console.log(`Book "${this.title}" has been returned.`);
        } else {
            console.log(`Book "${this.title}" was not issued.`);
        }
    }
    displayDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}, Issued: ${this.isIssued}`;
    }
}

const library = [
    new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565"),
    new Book("1984", "George Orwell", "9780451524935"),
    new Book("To Kill a Mockingbird", "Harper Lee", "9780061120084"),
    new Book("The Catcher in the Rye", "J.D. Salinger", "9780316769488"),
];
