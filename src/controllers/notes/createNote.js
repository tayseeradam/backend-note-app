const getNotes = require("./getNotes");

const createNote = (req, res) => {
  const { title } = req.body;

  const newNote = {
    id: getNotes.length + 1,
    title,
    created: currentDate
  };

  notes.push(newNote);
  return res.status(201).json({
    message: 'Note created created successfully',
    data: notes
  });

};

module.exports = createNote;