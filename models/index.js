var mongoose = require('mongoose');
/*add you connection somewhere here*/
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/Locals', {promiseLibrary: global.Promise});

/* adding model userModel to index.js */
module.exports.userModel = require('./userModel');
