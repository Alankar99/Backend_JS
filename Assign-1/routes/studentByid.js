var express = require('express');
// let { students } = require('../models/student-data');
let { deleteStudent , students } = require('../models/student-data');
const app = express();
var router = express.Router();

router.get('/', (req,res)=>
{
    let exists = false;
    let foundStudent;

    students.find((stu) =>
    {
        if(stu.id == req.query.id)
        {
            exists = true;
            foundStudent = stu;
        }
    });

    if(exists == true)
    {
        res.send(foundStudent);
    }
    else
    {
        res.send('Student not found');
    }
});

module.exports = router;