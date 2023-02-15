var express = require('express');
var router = express.Router();

// const student = require('../models/student-data');
let { deleteStudent , students } = require('../models/student-data');

/* GET all students*/
router.get('/', function(req, res, next) {
    res.send(students);
});

module.exports = router;