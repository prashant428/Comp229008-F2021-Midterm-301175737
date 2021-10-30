/* Filename: book.js
    Author's name: Prashant Sharma
    Student ID: 301175737
    Web App Name: Come229008-F2021-Midterm-301175737 */
    
let mongoose = require('mongoose');

// Create a model class
let bookModel = mongoose.Schema(
    {
        Title: String,
        Description: String,
        Price: Number,
        Author: String,
        Genre: String
    },
    {
        collection: "books"
    }
);

module.exports = mongoose.model('Book', bookModel);