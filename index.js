const express = require('express');

const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;


app.get("/", (req, res) => {
    res.send("Hello World! i am obaidullah");
});


const users = [
    {
        id: 0,
        name: "Shabana",
        email: "shabana@gmail.com",
        phone: "01788888888",
    },
    {
        id: 1,
        name: "Shabnoor",
        email: "shabnoor@gmail.com",
        phone: "01788888888",
    },
    {
        id: 2,
        name: "Shrabonti",
        email: "shrabonti@gmail.com",
        phone: "01788888888",
    },
    {
        id: 3,
        name: "Suchorita",
        email: "suchorita@gmail.com",
        phone: "01788888888",
    },
    { id: 4, name: "Soniya", email: "soniya@gmail.com", phone: "01788888888" },
    {
        id: 5,
        name: "Susmita",
        email: "susmita@gmail.com",
        phone: "01788888888",
    },
];


app.get("/users", (req, res) => {
    const search = req.query.search;

    //use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
    
});

// app method
app.post("/users", (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log("hitting the post", req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
});


// dynamic api
app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)  
    // console.log(req.params.id);
});


app.get("/fruits", (req, res) => {
    res.send(["mango", "oranges", "banana", "apple"]);
});

app.get('/fruit/mangoes/fazli', (req, res) => {
   
    res.send("yummy tok mama");
});


app.listen(port, () => {
    console.log("Example app listening", port);
});