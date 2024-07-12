const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001; 
const routes = require('./routes');
const api = require('./routes');

// Middleware for parsing JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use(routes);
app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/pages/index.html'))
);

// GET Route for notes page 
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
);

// Wildcard route to direct users to homepage
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);