const getNotes = require("./getNotes");

const getNote = (req, res) => {
  const { id } = req.params;
  const note = getNotes.find((note) => note.id === parseInt(id));
  if (!note) {
    return res.status(404).json({
      message: `Note of id: ${id} was not found`
    });
  }
  return res.status(200).json({
    message: 'Note found successfully',
    data: note
  });
};

module.exports = getNote;