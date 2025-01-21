const getNotes = require("./getNotes");

const createNote = async (req, res) => {
  try {
    const { title } = req.body;

    const newNote = {
      id: getNotes.length + 1,
      title,
      created: currentDate
    };

    await notes.push(newNote);
    return res.status(201).json({
      message: 'Note created created successfully',
      data: notes
    });

  } catch (error) {
    console.log(error.message);
  }
};

module.exports = createNote;