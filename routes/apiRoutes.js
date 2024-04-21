const path = require('path');
const fs = require('fs')
const app = require('express').Router()


//Get file to read db.json file and return all save note in json
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'))
});

app.post('/notes', (req, res) => {
   
    let newNote = req.body

    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf-8', (err, data) => {
    
        if (err) {
            console.log(err)
        }
        const parseData = JSON.parse(data)
        parseData.push(newNote)

        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(parseData), (err, data) => {
            if (err) {
                console.log(err)
            }
            
            res.status(200).json(data)
        })

    })

});

module.exports = app;