/* Filename: index.js
    Author's name: Prashant Sharma
    Student ID: 301175737
    Web App Name: Come229008-F2021-Midterm-301175737 */

//renders the index page
exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
};
