var express = require('express');
var router = express.Router();

let app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// const student = require('../models/student-data');
let { deleteStudent , students } = require('../models/student-data');

/* GET all students*/
router.post('/', function(req, res, next) {
    let exists = false;
    let foundStudent;

    students.find((stu) =>
    {
        if(stu.id == req.body.id)
        {
            exists = true;
            stu.name = req.body.name;
            stu.marks = req.body.marks;
        }
    });

    if(exists == true)
    {
        res.send('Student Updated!');
    }
    else
    {
        res.send('Student not found');
    }
});

module.exports = router;