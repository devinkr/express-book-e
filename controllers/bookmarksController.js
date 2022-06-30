//controllers/bookmarksController.js
// require the Express module
const express = require('express');

// instantiate a router -- this will hold all the logic
// for the URLs + methods for this resource
const router = express.Router();

// import the bookmark model
const Bookmark = require('../models/Bookmark');

// Add routes to the router object
// Index: GET all the bookmarks
router.get('/', (req, res, next) => {
	// Get all the bookmarks from DB
	Bookmark.find({})
		.then((bookmarks) => res.json(bookmarks))
		.catch(next);
});

// Using async/await
// Index: GET all the bookmarks
/* router.get('/', async (req, res, next) => {
	try {
		// 1. Get all of the bookmarks from the DB
		const bookmarks = await Bookmark.find({});
		// 2. Send them back to the client as JSON
		res.json(bookmarks);
	} catch (err) {
		// if there's an error, pass it on!
		next(err);
	}
}); */

// localhost:8000/api/bookmarks/:id
// GET: Show route
router.get('/:id', async (req, res, next) => {
	try {
		Bookmark.findById(req.params.id, (err, bookmark) => {
			if (bookmark) {
				return res.json(bookmark);
			} else {
				return res.sendStatus(404);
			}
		});
	} catch (err) {
		next(err);
	}
});

// localhost:8000/api/bookmarks
// POST: Create route
router.post('/', (req, res, next) => {
	Bookmark.create(req.body, (err, bookmark) => {
		if (err) {
			return res.sendStatus(400);
		} else {
			return res.status(201).json(bookmark);
		}
	});
});

// localhost:8000/api/bookmarks/:id
// PUT: Update route
router.put('/:id', (req, res) => {
	Bookmark.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true, overwrite: true },
		(err, bookmark) => {
			if (err) {
				return res.sendStatus(404);
			} else {
				return res.json(bookmark);
			}
		}
	);
});

// localhost:8000/api/bookmarks/:id
// PATCH: Update route
router.patch('/:id', (req, res) => {
	Bookmark.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, bookmark) => {
			if (err) {
				return res.sendStatus(404);
			} else {
				return res.json(bookmark);
			}
		}
	);
});


// Export this router object so that it is accessible when we require the file elsewhere
module.exports = router;
