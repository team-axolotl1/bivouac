const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

const userRoute = require('./routes/userRoute');
const hikeRoute = require('./routes/hikeRoute');

const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");
const cookieSession = require('cookie-session');

// initializes session and passport
// app.use(session({
//   secret: "Our little secret.",
//   resave: false,
//   saveUninitialized: false
// }));
app.use(cookieSession({
  name: 'google-auth-session',
  keys: ['key1', 'key2']
}))

const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
}

app.get("/logout", (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/');
})

app.use(passport.initialize());
app.use(passport.session());

app.get("/auth/google",
  passport.authenticate("google", { scope: ["profile", "email", 'https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/userinfo.email'] })
);
app.get("/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/signup" }),
  function(req, res) {
    // Successful authentication, redirect secrets.
    res.redirect("/");
  }
);
app.get("/logout", function(req, res){
  res.redirect("/login");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoute)
app.use('/api/hikes', hikeRoute)

if (process.env.NODE_ENV === 'production') {
  app.use('/dist', express.static(path.resolve(__dirname, '../dist')));

  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
  });
};

GoogleStrategy.prototype.userProfile = function(token, done) {
  done(null, {})
}
// app.use((req, res) => res.sendStatus(404)); // catch-all route handler for any requests to an unknown route
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})
app.get('*', (req, res) => {
  console.log("Invalid URL detected");
  res.status(404).json({ error: `Page not found, request to ${req.path} failed` });
});
/**
 * configure express global error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */
 app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred: ' + err }, 
  };
  
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  console.log(errorObj.message);
  
  // return res.send({'Error status': errorObj.status, 'Message': errorObj.message});
  return res.status(errorObj.status).json(errorObj.message)
});


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
