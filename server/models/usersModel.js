const mongoose = require('mongoose');
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");
require("dotenv").config();
// const app = require('../server.js');
const MONGO_URI = "mongodb+srv://hulkaroy:Pwigginz@cluster0.6njsy.mongodb.net/?retryWrites=true&w=majority"

// const express = require('express');
// const app = express();

// app.use(session({
//   secret: "Our little secret.",
//   resave: false,
//   saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'hikeTracker'
})
.then(() => console.log('Connected to Mongo DB.'))
.catch(err => console.log(err));
//mongoose.set("useCreateIndex", true);


const UserSchema = new mongoose.Schema({
  googleId: {type: String, required: false},
  firstName : { type : String, required : false } ,
  lastName : { type : String, required : false }, 
  location : { type : String, required : false },
  email : { type : String, required : false },
  password : { type : String, required : false }
});


UserSchema.plugin(passportLocalMongoose);
UserSchema.plugin(findOrCreate);

const User = mongoose.model('users', UserSchema);

passport.use(User.createStrategy());
passport.serializeUser(function(user, done) {
  console.log('USER: ', user)
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/callback",
  userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
  passReqToCallback: true,
},

function(accessToken, refreshToken, profile, cb) {
  console.log({profile})
  User.findOrCreate({ googleId: profile.id, email: profile.displayEmail }, 
  function (err, user) {
    return cb(err, user);
  });
}));


passport.serializeUser((user, done) => {
  done(null, user);
  // done(null, user.id);
})

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user)
    })
})

module.exports = User;
