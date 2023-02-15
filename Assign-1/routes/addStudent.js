var express = require('express');
const app = express();
var router = express.Router();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const student = require('../models/student-data');


router.post('/', (req,res) =>
{
    let newStudent = {'id':req.body.id,'name':req.body.name , 'marks':req.body.marks};

    let exists = false;
    student.students.find((stu)=>
    {
        console.log(stu.id , newStudent.id);
        if(stu.id == newStudent.id)
        {
            exists = true;
            return;
        }
    });
    if(exists == true)
    {   
        res.send('Student with this ID already Exists');  
    }
    else
    {   
        student.students.push(newStudent);
        res.send('Student added Successfully');
    }
})

module.exports = router;