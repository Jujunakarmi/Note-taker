const path = require('path');
const fs = require('fs')
const app = require('express').Router()
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
        const updatedNote={
            title: newNote.title,
            text : newNote.text,
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

app.delete('/notes/:id',(req,res) => {
    // read the id using req.params 
    //read data from the file using fs.read
    //convert it to object fromat usong json.parse
    //use array.filter method to filter all the objects which are not euqls to the id parse in req.params
    //use fs.write to  update file with new data
    //res.status.json to send the appropraite status and new json data
})

module.exports = app;