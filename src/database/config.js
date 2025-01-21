
const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DB connection successful');
  } catch (error) {
    console.error('DB connection failed:', error.message);
  }
};

module.exports = dbConnection;
