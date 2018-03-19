// require express and other modules
var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override"),

  //  NEW ADDITIONS
  cookieParser = require("cookie-parser"),
  session = require("express-session"),
  passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;

// require Post model
var db = require("./models"),
  User = db.User;
// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true, }));

// serve static files from public folder
app.use(express.static(__dirname + "/public"));

// set view engine to ejs
app.set("view engine", "ejs");

app.use(methodOverride("_method"));

app.use(cookieParser());
app.use(session({
  secret: "thisisasecret",
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

// Login system wont work without these
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// HOMEPAGE ROUTE
app.get("/", function (req, res) {
      res.render("index");
  });

// Render signup page
app.get("/signup", function (req, res) {
    res.render("signup");
  });

// Render login page
app.get("/login", function (req, res) {
  res.render("login");
});

// Render Map
app.get('/feed', function(req, res) {
  res.render('feed')
})

// Render Profile Page - this breaks my App
// app.get('/user/:id', function(req, res) {
//   res.render('profile')
// })

// SIGNUP WORKING
app.post("/signup", function (req, res) {
  console.log(req.body);
  User.register(new User({ username: req.body.username,
                           password: req.body.password,
                           name: req.body.name,
                           isLocal: req.body.isLocal,
                           age: req.body.age,
                           city: req.body.city,
                           bio: req.body.bio}), req.body.password,
      function () {
        passport.authenticate("local")(req, res, function() {
          // If a traveler signs up, redirect to the feed
          if (req.body.isLocal === 'Traveler') {
          res.redirect('/feed');
        } else {
          // If a local signs up, redirect to their profile
          res.redirect(`/user/${req.user._id}`);
        }
      })
    }
  )
});

// CRUD Routes
// GET '/users' shows all users. Not using
// POST '/users' create a user. Used in '/signup'
// GET 'users/:id' show one user. DONE
// PUT 'users/:id' update one user. DONE
// DELETE 'users/:id' delete one user

// SHOW (user profile) - working
app.get('/user/:id', function(req, res) {
  var userId = req.user._id;
  User.findById(userId, function(err, succ) {
    if (err) {
      console.log("Error: " + err);
    } else {
      res.render('profile', {user: succ})
    }})
  })

// UPDATE PAGE FOR USER PROFILE
app.get('/user/:id/update', function(req, res) {
  var userId = req.user._id;
  console.log(userId);
  User.findById(userId, function(err, succ) {
    if (err) {
      console.log("Error: " + err);
    } else {
      res.render('update_profile', {user: succ})
    }})
})

// SAVE UPDATES FOR USER PROFILE
app.put('/user/:id', function(req, res) {
  console.log("Hello, you just tried to update");
  var userId = req.user._id;
  User.findById(userId, function(err, foundUser) {
    if (err) {
      console.log("Error: " + err);
    } else {
      console.log("found user " + foundUser);
      foundUser.username = req.body.username,
      foundUser.name = req.body.name,
      foundUser.isLocal = req.body.isLocal,
      foundUser.age = req.body.age,
      foundUser.city = req.body.city,
      foundUser.bio = req.body.bio;
      foundUser.save(function(err, updatedUserSaved) {
        if (err) {
          console.log(err);
        } else {
          console.log('User is Saved: ' + updatedUserSaved);
          res.render('profile', {user: updatedUserSaved})
        }
      })
    }})
  })

// DELETE - not working
app.delete('/user/:id', function(res, req) {
  console.log(req);
  User.findByIdAndRemove(req.params.id, function(err, deletedUser) {
    if (err) {
      console.log("Error trying to delete post: " + err);
    } else {
    console.log("User Deleted Sucessfully");
    res.redirect('/');
  }
  })
})

// LOGIN login
app.post("/login", passport.authenticate("local"), function (req, res) {
  console.log(req);
  User.findOne({username: req.body.username}, function(err, succ){
    console.log("Error is: " + err);
    console.log("Success is: " + succ);
    if(req.body.password === succ.password) {
      // Redirect! This is likely why delete isn't working
      res.render('profile', {user: succ})
    }
    else{
      res.sendStatus(404);
    }
  })
})

// STILL NEED A LOGOUT BUTTON
app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

// listen on port 3000
app.listen(3000, function() {
  console.log("server started");
});
