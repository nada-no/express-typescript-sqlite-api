const db = require('../services/db');

interface Book { id: Number, title: String, author: String, read: String };

function getAll() {
    const data = db.query(`SELECT * FROM books`);

    return {
        data
    }
}

function validateCreate(book: Book) {
    let messages = [];

    console.log(book);

    if (!book) {
        messages.push('No object is provided');
    }

    if (!book.title) {
        messages.push('Title is empty');
    }

    if (!book.author) {
        messages.push('Author is empty');
    }

    if (messages.length) {
        let error = new Error(messages.join());
        throw error;
    }
}

function create(newBook: Book) {
    validateCreate(newBook);
    const { title, author } = newBook;
    const result = db.run('INSERT INTO books (title, author) VALUES (@title, @author)', { title, author });

    let message = 'Error in creating book';
    if (result.changes) {
        message = 'book created successfully';
    }

    return { message };
}

function deletion(id: Number) {
    const bookid = id;
    const result = db.run('DELETE FROM books WHERE id = @bookid', { bookid });

    let message = 'Error in deleting book';
    if (result.changes) {
        message = 'book deleted successfully';
    }

    return { message };
}

function update(updateBook: Book){
    const {id,title,author,read} = updateBook;
    const result = db.run('UPDATE books SET title=@title, author=@author, read=@read WHERE id=@id', {id,title,author,read});

    let message = 'Error updating book';
    if (result.changes) {
        message = 'book updated successfully';
    }

    return { message };
}

module.exports = {
    getAll, create, deletion, update
}