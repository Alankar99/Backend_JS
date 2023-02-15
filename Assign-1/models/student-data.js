let students =
[
    {
        'id' : 1,
        'name' : 'Alankar Jamle',
        'marks' : 89
    },

    {
        'id' : 2,
        'name' : 'google',
        'marks' : 33
    }
];

function deleteStudent(id)
{
    console.log(students);
}
// module.exports = class Students
// {
//     deleteStudent(id)
//     {
//         students = students.filter((stu) => stu.id != id);
//     }
// }

module.exports = {deleteStudent , students};