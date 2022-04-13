const express = require('express');
const cors = require('cors');
const knex = require('knex');
const app = express();

const db = knex({
    client: 'pg',
    connection: {
        host: "localhost",
        user: "postgres",
        password: "admin",
        database: "postgres",
        port: 5433
    },
});


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// GET: Fetch all cards from the database
app.get('/cards', (req, res) => {
    db.select('*')
        .from('card')
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

// GET: Fetch Cards by id
app.get('/cards/:id', (req, res) => {
    const id = req.params.id;
    db.select('*')
        .from('card')
        .where('id', '=', id)
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

// GET: Fetch Cards by title
app.get('/getCardbyTitle/:id', (req, res) => {
    const id = '%' + req.params.id + '%';
    db.select('*')
        .from('card')
        .where('title', 'like', id)
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

// GET: Fetch Card titles
app.get('/getCardTitles/', (req, res) => {
    db.select('title')
        .from('card')
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

// GET: Fetch Cards paragraphs
app.get('/getCardParagraphs/', (req, res) => {
    db.select('content')
        .from('card')
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

// GET: Fetch Cards imgs
app.get('/getCardimgs/', (req, res) => {
    db.select('img')
        .from('card')
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

// GET: Fetch Cards Titles by id 
app.get('/getCardTitles/:id', (req, res) => {
    const id = req.params.id;
    db.select('title')
        .from('card')
        .where('id', '=', id)
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

// GET: Fetch Cards images by id 
app.get('/getCardimgs/:id', (req, res) => {
    const id = req.params.id;
    db.select('img')
        .from('card')
        .where('id', '=', id)
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

// GET: Fetch Cards Paragraphs by id 
app.get('/getCardParagraphs/:id', (req, res) => {
    const id = req.params.id;
    db.select('content')
        .from('card')
        .where('id', '=', id)
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

// GET: Fetch all contacts from the database
app.get('/contacts', (req, res) => {
    db.select('*')
        .from('contact')
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

// GET: Fetch all contacts by id
app.get('/contacts/:id', (req, res) => {
    const id = req.params.id;
    db.select('*')
        .from('contact')
        .where('id', '=', id)
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

// POST: Create contacts
app.post('/add-contact', (req, res) => {
    const { firstname, lastname, email, title, message} = req.body;
    const create_time = new Date();
    console.log(req.body);
    db('contact')
    .insert({
        firstname: firstname,
        lastname: lastname,
        email: email,
        title: title,
        message: message,
        create_time: create_time,
    })
    .then(() => {
        console.log('Contact Added');
        return res.json({ msg: 'Contact Added' });
    })
    .catch((err) => {
        console.log(err);
    });
});


const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));