const express = require('express')
var cors = require('cors')
var app = express()
const port = process.env.PORT || 5000;
// middleware
app.use(cors());
app.use(express.json());

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com' },
    { id: 2, name: 'Sabnoon', email: 'sabnoon@gmail.com' },
    { id: 3, name: 'Sabila', email: 'sabila@gmail.com' },
]

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/users', (req, res) => {
    res.send(users);
})
app.post('/users', (req, res) => {
    console.log("hitting", req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})