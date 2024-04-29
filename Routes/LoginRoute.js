const userCont = require('../Controller/LoginController');
const passport = require('passport');
const router = require("express").Router();

// Assuming you have configured Passport's local strategy
const localStrategy = require('passport-local').Strategy;

// Configure Passport's local strategy
passport.use(new localStrategy(
    function(username, password, done) {
        // Authenticate user against MongoDB here
        // ...
    }
));

// Serialize and deserialize user
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    // Fetch user from MongoDB based on id
    // ...
});

// Use express-session middleware
const session = require('express-session');
router.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

// Initialize Passport and use session
router.use(passport.initialize());
router.use(passport.session());

// Routes
router.get("/index", userCont.userGet);
router.post("/signup", userCont.userPost);
router.get("/login", userCont.loginGet);

// Login route with Passport authentication
router.post(
    "/login",
    passport.authenticate('local', { failureRedirect: "/login" }),
    function (req, res) {
        res.redirect("/index");
    }
);

// Logout route
router.get("/logout", function(req, res){
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

module.exports = router;