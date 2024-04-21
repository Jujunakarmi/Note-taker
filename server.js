//Imports required
const fs = require('fs')
const express = require('express');

const app = express();

const PORT= process.env.port;

const notesRoutes= require('./routes/notesRoutes')

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//home route
app.get('/', (req,res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);


app.use('/notes', notesRoutes);


//Listener port
app.listen(PORT, () =>console.log(`Server is listening on http://localhost:${PORT}`));
