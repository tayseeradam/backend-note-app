// importing express
const express = require('express');

// import notes
const { notes, currentDate } = require('../data');

// we are creating an instance of express
const app = express();

// Body parse for json data
app.use(express.json());

// define a port
const port = 8080;

// define a hostname
const hostname = "127.0.0.1";


// define root and functionalities
app.get('/', (req, res) => {
  res.send(`
    <h1 style="text-align: center;margin-top: 50px; color: red">Welcome to our Note App APIS</h1>
    `);
});

// route for getting notes
app.get('/notes', (req, res) => {
  // fetch data
  return res.status(200).json({
    message: 'Notes successfully retrieved',
    data: notes
  });
});

// route for getting a single note by id
app.get('/notes/:id', (req, res) => {
  const { id } = req.params;
  const note = notes.find((note) => note.id === parseInt(id));
  if (!note) {
    return res.status(404).json({
      message: `Note of id: ${id} was not found`
    });
  }
  return res.status(200).json({
    message: 'Note found successfully',
    data: note
  });
});

// route for creating a note
app.post('/notes', (req, res) => {
  const { title } = req.body;

  const newNote = {
    id: notes.length + 1,
    title,
    created: currentDate
  };

  notes.push(newNote);
  return res.status(201).json({
    message: 'Note created created successfully',
    data: notes
  });

});

// listen to the server
app.listen(port, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
