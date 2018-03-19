var mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new Schema({
  name: String,
  username: String,
  password: String,
  isLocal: String,
  age: Number,
  city: String,
  bio: String,
  image: String  
});

UserSchema.plugin(passportLocalMongoose);

var User = mongoose.model("User", UserSchema);
module.exports = User;
