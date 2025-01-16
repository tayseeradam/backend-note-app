// importing express
const express = require('express');

// import routes
const noteRoutes = require('./routes/notes');
const authRoutes = require('./routes/auth');

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

// routes
app.use('/v1', noteRoutes);
app.use('/v1', authRoutes);

// listen to the server
app.listen(port, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
