// import Bookmark model
const Bookmark = require('../models/Bookmark');

// Import seed data
const bookmarks = require('./seeds.json');

Bookmark.insertMany(bookmarks)
	.then((res) => {
		console.log(res);
	})
	.catch((err) => console.log(err))
	.finally(() => process.exit());

// can also use callback format
/* Vampire.insertMany(seedData, (err, vampires) => {
		if (err) {
			console.log(err);
		}
		console.log('added provided vampire data', vampires);
		mongoose.connection.close();
	}); */
