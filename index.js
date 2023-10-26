const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
const estudiantes = [
    {id: 1, name: 'Brayan', lastname: 'One Bullet', age: 20, enroll: true},
    {id: 2, name: 'Aureum', lastname: 'Dev', age: 20, enroll: false},
    {id: 3, name: 'Octavio', lastname: 'Visioned', age: 20, enroll: true},
];

app.get('/', (req, res) => {
    res.send('Probando API en node');
});

app.get('/estudiantes/GetAllStudents', (req, res) => {
    res.send(estudiantes);
});

app.get('/estudiantes/get/:id', (req,res) => {
    const studentFinded = estudiantes.find(c => c.id === parseInt(req.params.id));
   

    res.send(studentFinded);
});


app.listen(port, () => {
    console.log(`escuchando por el port ${port}`);
});
