const { notes } = require('../../../data');

const getNotes = (req, res) => {
  // fetch data
  return res.status(200).json({
    message: 'Notes successfully retrieved',
    data: notes
  });
};

module.exports = getNotes;