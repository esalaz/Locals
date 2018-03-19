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
      res.render("index", {user: req.user});
  });

app.get("/signup", function (req, res) {
    res.render("signup");
  });

// SIGNUP WORKING
app.post("/signup", function (req, res) {
  console.log(req.body);
  User.register(new User({ username: req.body.username, }), req.body.password,
      function () {
        passport.authenticate("local")(req, res, function() {
          if (req.body.isLocal === 'Traveler') {
          res.send("Traveler");
        } else {
          res.redirect('/profile/:id')
        }
        });
      }
  )
});

app.get("/login", function (req, res) {
  res.render("login");
});

// LOGIN NOT WORKING
app.post("/login", passport.authenticate("local"), function (req, res) {
  console.log(req);
  User.findOne({username: req.body.username}), function(err, succ){
    console.log("Error is: " + err);
    console.log("Success is: " + succ);
    if(req.body.password === User.password) {
      res.json({title:'Success Fully login'});
    }
    else{
      res.json({title:'invalide password'});
    }
  }
})
// this won't work because they are not submitted traveler or local
//   if (req.body.isLocal === 'Traveler') {
//   res.send("Traveler");
// } else {
//   res.redirect('/profile/:id')
// }

app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});
//
// app.get("/profile/:id", function (req, res) {
// req.params.id
//   res.render("travelprofile");
// });

// listen on port 3000
app.listen(3000, function() {
  console.log("server started");
});
