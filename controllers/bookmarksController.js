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

// Export this router object so that it is accessible when we require the file elsewhere
module.exports = router;
