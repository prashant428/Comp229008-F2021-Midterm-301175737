/* Filename: index.js
    Author's name: Prashant Sharma
    Student ID: 301175737
    Web App Name: Come229008-F2021-Midterm-301175737 */

var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controlerIndex.home);

module.exports = router;
