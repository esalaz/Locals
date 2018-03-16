var User = require('../models/user');
var FacebookStrategy = require('passport-facebook').Strategy;

module.exports = function(passport){
  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      console.log('deserializing user:',user);
      done(err, user);
    });
  });

  passport.use('facebook', new FacebookStrategy({
    clientID        : process.env.FACEBOOK_API_KEY,
    clientSecret    : process.env.FACEBOOK_API_SECRET,
    callbackURL     : 'http://localhost:3000/auth/facebook/callback',
    enableProof     : true,
    profileFields   : ['name', 'emails']
  }, function(access_token, refresh_token, profile, done) {

    // // Use this to see the information returned from Facebook
    // console.log(profile)

    process.nextTick(function() {

      User.findOne({ 'fb.id' : profile.id }, function(err, user) {
        if (err) return done(err);
        if (user) {
          return done(null, user);
        } else {

          var newUser = new User();
          newUser.fb.id           = profile.id;
          newUser.fb.access_token = access_token;
          newUser.fb.firstName    = profile.name.givenName;
          newUser.fb.lastName     = profile.name.familyName;
          newUser.fb.email        = profile.emails[0].value;

          newUser.save(function(err) {
            if (err)
              throw err;

            return done(null, newUser);
          });
        }

      });
    });
  }));

}
There's a lot going on here so let's break it down. This code is really similar to what we did to use passport-local:

First, we give the credentials for the current app to the Facebook strategy;
Then, with the array given to profileFields, we describe which fields we want to get back from Facebook;
The function that follows will be executed when Facebook sends back the data to the website using /auth/facebook/callback endpoint;
Finally, if the user already exists, the code directly executes the callback and gives the user object found by mongo to the callback, otherwise, we create a new user object and execute the callback.
Add the routes and the views
To authenticate via OAuth with Facebook, an app needs three routes:

A route to request Facebook
A route for the Facebook callback
A route for the logout
For simplicity sake, we will set up just one view that shows different data depending on whether or not the user is logged in or not. In layout.ejs, add:

<!DOCTYPE html>
<html>
<head>
  <title>Facebook authentication</title>
</head>
<body>
  <h1>FACEBOOK LOGIN USING PASSPORT</h1>
  <div>
    <% if(user != undefined){ %>
      <h2>Below is the data sent by facebook</h2>
      <pre>
        <%= user.fb %>
      </pre>
      <a href="/logout">Logout</a>
    <% } else { %>
      <a href="/auth/facebook">Login with Facebook</a>
    <% } %>
  </div>
</body>
</html>
