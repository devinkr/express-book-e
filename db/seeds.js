// import Models
const Bookmark = require('../models/Bookmark');
const Users = require('../models/User');

// Import seed data
const bookmarks = require('./seeds.json');

const users = [
	{
		name: 'Esin Saribudak',
		email: 'esin@cats.com',
	},
	{
		name: 'Zoe Peterson',
		email: 'zoe@cats.com',
	},
	{
		name: 'Tom Kolsrud',
		email: 'tom@cats.com',
	},
];

/* Bookmark.insertMany(bookmarks)
	.then((res) => {
		console.log(res);
	})
	.catch((err) => console.log(err))
	.finally(() => process.exit()); */

// can also use callback format
/* Vampire.insertMany(seedData, (err, vampires) => {
		if (err) {
			console.log(err);
		}
		console.log('added provided vampire data', vampires);
		mongoose.connection.close();
	}); */

/* Users.insertMany(users)
	.then((res) => {
		console.log(res);
	})
	.catch((err) => console.log(err))
	.finally(() => process.exit()); */
