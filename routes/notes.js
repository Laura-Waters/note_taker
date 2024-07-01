const notes = require('express').Router();


notes.get('/', (req, res) => {
    readFromFile('./db/db.json')
        .then(data => res.json(JSON.parse(data)))
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Failed to read data from the file' });
        });
});


module.exports = notes; 