var express = require('express');
let app = express();
let { deleteStudent , students } = require('../models/student-data');
var router = express.Router();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// will work properly with a database
router.post('/', (req,res)=>
{
    let exists = false;

    students.find((stu) =>
    {
        if(stu.id == req.body.id)
        {
            exists = true;
            students = students.filter((stu) => stu.id != req.body.id);
            res.send(students);
        }
    });

    if(exists == false)
    {
        res.send('Student not found');
    }

});

module.exports = router;