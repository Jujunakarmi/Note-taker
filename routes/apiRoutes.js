const path = require('path');
const fs = require('fs')
const express = require('express')
const app= express()

//Get file to read db.json file and return all save note in json
app.get('./api/notes', (req,res) => {
    res.sendFile(path.join(__dirname,'../db/db.json'))
});

app.post('./api/notes', (req,res) => {
    fs.readFile('..db/db.json')
    
});