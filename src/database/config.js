// import mongoose
const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
  } catch (error) {
    console.log('DB connection failed', error.message);
  }
};

module.exports = dbConnection;