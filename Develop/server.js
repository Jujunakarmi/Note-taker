//Imports
const fs = require('fs')
const express = require('express');

const app = express();

const PORT= 3001;
const path= require('path');

//Middleware
app.use(express.static('public'));


//Get route for homepage
app.get('/', (req,res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname,'/public/notes.html'));
})

//Listener port
app.listen(PORT, () =>console.log(`Server is listening on http://localhost:${PORT}`));
