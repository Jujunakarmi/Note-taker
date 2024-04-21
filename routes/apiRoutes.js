const path = require('path');
const fs = require('fs')
const app = require('express').Router()
//uuid gives unique id which helps to delete the specific object
const { v4: uuidv4 } = require('uuid');



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
        //updated note after parsing
        const updatedNote = {
            title: newNote.title,
            text: newNote.text,
            //getting id into object
            id: uuidv4()
        }
        parseData.push(updatedNote)

        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(parseData), (err, data) => {
            if (err) {
                console.log(err)
            }

            res.status(200).json(data)
        })

    })

});

app.delete('/notes/:id', (req, res) => {
    // read the id using req.params from first array
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf-8', (err, data) => {

        if (err) {
            throw (err)
        }
    // parse the data into objects
        const parseData = JSON.parse(data)
        //used splice method to id param to delete the id
        parseData.splice(req.params.id, 1);
        updateDb()
        console.log('Deleted ' + req.params.id)

     //again write the whole thing again
        function updateDb() {
            fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(parseData), (err, data) => {
                if (err) {
                    throw (err)
                }

                res.status(200).json(data)
            });
        }
    })
});

module.exports = app;