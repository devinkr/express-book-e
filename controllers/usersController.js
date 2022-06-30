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
		res.status(404);
		next(error);
	}
});

// localhost:8000/api/users
// POST: Create route
router.post('/', async (req, res, next) => {
	try {
		const newUser = await User.create(req.body);
		res.status(201).json(newUser);
	} catch (err) {
		next(err);
	}
});

// localhost:8000/api/users/:id
// PUT: Update route
router.put('/:id', (req, res) => {
	User.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true, overwrite: true },
		(err, user) => {
			if (err) {
				return res.Status(400).json(err);
			} else {
				return res.json(user);
			}
		}
	);
});

// localhost:8000/api/users/:id
// PATCH: Update route
router.patch('/:id', (req, res) => {
	User.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, user) => {
			if (err) {
				return res.sendStatus(400).json(err);
			} else {
				return res.json(user);
			}
		}
	);
});

// localhost:8000/api/users/:id
// DELETE: Delete route
router.delete('/:id', (req, res) => {
	User.findByIdAndDelete(req.params.id, (err, user) => {
		if (err) {
			return res.status(400).json(err);
		} else {
			return res.sendStatus(204);
		}
	});
});

module.exports = router;
