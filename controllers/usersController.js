//controllers/usersController.js
// require the Express module
const express = require('express');

// instantiate a router -- this will hold all the logic
// for the URLs + methods for this resource
const router = express.Router();

// import the user model
const User = require('../models/User');

// Add routes to the router object
// Index: GET all the users
router.get('/', (req, res, next) => {
	// Get all the users from DB
	User.find({})
		.then((users) => res.json(users))
		.catch(next);
});

// localhost:8000/api/users/:id
// GET: Show route
router.get('/:id', async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id);
		return res.json(user);
	} catch (error) {
		res.status(400);
		next(error);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const newUser = await User.create(req.body);
		res.status(201).json(newUser);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
