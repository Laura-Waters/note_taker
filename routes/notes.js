const notes = require('express').Router();
const fs = require('fs');
const path = require('path'); 
const { v4: uuidv4 } = require('uuid');

// GET route for retrieving all notes 
notes.get('/api/notes', function(req, res) {
    // read the contents of db.json file
    fs.readFile(path.join(__dirname, 'db.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error' });
            return;
        }

        // Parse the JSON data
        const notes = JSON.parse(data);

        // Send the notes as a JSON response
        res.json(notes);
    });
});

notes.post('/api/notes', function(req, res) {
    console.log(req.body); 
    
    const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      note_id: uuidv4(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully`);
  } else {
    res.error('Error in adding note');
  }

})

module.exports = notes; 