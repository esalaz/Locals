var express = require('express');
var app = express();
var db = require('./models/index.js');
var bodyParser = require('body-parser'),

// NEW ADDITION - requiring dependencies
cookieParser = require('cookie-parser'),
session = require('express-session'),
passport = require('passport'),
LocalStrategy = require('passport-local').Strategy;

// Configure app
app.set('views', __dirname + '/views');      // Views directory
app.use(express.static('public'));          // Static directory
app.use(bodyParser.urlencoded({ extended: true })); // req.body

// NEW ADDITION - middleware for auth
app.use(cookieParser());
app.use(session({
  secret: 'secretkey',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.set("view engine", "ejs");

// NEW ADDITION - passport configuration
passport.use(new LocalStrategy(UserModel.authenticate()));
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

// Set CORS Headers
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

//basic root route
app.get('/',function(req,res){
  console.log('yoooo')
  res.render(__dirname + '/views/signup.html.ejs')
  });



app.listen(process.env.PORT || 3000,function(){
  console.log('server running');
});
