/* Filename: book.js
    Author's name: Prashant Sharma
    Student ID: 301175737
    Web App Name: Come229008-F2021-Midterm-301175737 */

// create a reference to the model
let Book = require('../models/book');

// Gets all books from the Database and renders the page to list all books.
module.exports.bookList = function(req, res, next) {  
    Book.find((err, bookList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('book/list', {
                title: 'Book List', 
                books: bookList
            })            
        }
    });
}

// Gets a book by id and renders the details page.
module.exports.details = (req, res, next) => {
    
    let id = req.params.id;

    Book.findById(id, (err, bookToShow) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('book/details', {
                title: 'Book Details', 
                book: bookToShow
            })
        }
    });
}

// Renders the Add form using the add_edit.ejs template
module.exports.displayAddPage = (req, res, next) => {
    
    // ADD YOUR CODE HERE       
    res.render('book/add_edit', {title: "Add/Edit Book",
             book: ""}) //rendering the add/edit page and passing the title 
        


}

// Processes the data submitted from the Add form to create a new book
module.exports.processAddPage = (req, res, next) => {

    // ADD YOUR CODE HERE
    let newBook= Book({ //defining new book
        "Title":req.body.Title,
        "Description": req.body.Description,
        "Price": req.body.Price,
        "Author": req.body.Author,
        "Genre": req.body.Genre
    });
    Book.create(newBook, (err)=>{ //creating new book
        if(err){
            console.log(err);
            res.end(err);
        }else{
            //refresh the book list and redirect the user to it
            res.redirect('/book/list'); 
        }
    })
}



// Gets a book by id and renders the Edit form using the add_edit.ejs template
module.exports.displayEditPage = (req, res, next) => {
    
    // ADD YOUR CODE HERE
    let id=req.params.id;

    Book.findById(id, (err, bookToEdit)=>{ //finding book by id
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.render('book/add_edit', {title: "Add/Edit Book", 
             book: bookToEdit}) //rendering the add/edit page and passing the Book object and title
        }
    });
}


// Processes the data submitted from the Edit form to update a book
module.exports.processEditPage = (req, res, next) => {
    
    // ADD YOUR CODE HERE
    let id=req.params.id

    let updatedBook=Book({ //defining the updated book
        "_id": id,
        "Title":req.body.Title,
        "Description": req.body.Description,
        "Price": req.body.Price,
        "Author": req.body.Author,
        "Genre": req.body.Genre
    });

    Book.updateOne({_id: id}, updatedBook, (err)=>{ //updating the book
        if(err){
            console.log(err);
             res.end(err);
        }
        else{
            //refreshing the book list and redirecting the user to it
            res.redirect('/book/list');
        }
    });
}
    


// Deletes a book based on its id.
module.exports.performDelete = (req, res, next) => {
    
    // ADD YOUR CODE HERE
    let id=req.params.id;

    Book.remove({_id: id}, (err)=>{ //removing the book with the given id
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //refreshing the book list and redirecting the user back to it
            res.redirect('/book/list');
        }
    });

}