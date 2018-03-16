var mongoose = require('mongoose');
/*add you connection somewhere here*/
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/Locals', {promiseLibrary: global.Promise});

/* adding model UserModel to index.js */
module.exports.UserModel = require('./UserModel');
