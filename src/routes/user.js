// importing express
const express = require('express');

// import controllers
const getUsersController = require('../controllers/users/getUsers');
const getUserController = require('../controllers/users/getUser');
const createUserController = require('../controllers/users/createUser');


// create a router instance
const router = express.Router();

// Get users route 
router.get('/users', getUsersController);

// Get user route
router.get('/users/:userId', getUserController);

// Create a user route
router.post('/users', createUserController)


module.exports = router;