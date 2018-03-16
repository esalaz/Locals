var mongoose = require('mongoose');
var Schema = mongoose.Schema;

UserModelSchema = new Schema({
first_name:String,
last_name:String,
email:String,
password:String,
bio:String,
isLocal:Boolean,
image:String,
age:Number,
city:String
});
var UserModel = mongoose.model('UserModel', UserModelSchema);
module.exports = UserModel;

//FACEBOOK_API_KEY
module.exports = mongoose.model('User',{
  fb:{
    id:STRING,
    access_token: String,
    firstName: String,
    lastName: String,
    email: String
  }
});
