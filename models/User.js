// models/User.js
// require the mongoose instance configured in db/connection.js
const mongoose = require('../db/connection');

// make a new schema with 2 properties, and assign it to a variable
const UserSchema = new mongoose.Schema({
	name: String,
	email: String,
});

// instantiate the model, calling it "User" and with the schema we just made
const User = mongoose.model('User', UserSchema);

// export the newly created model
module.exports = User;
