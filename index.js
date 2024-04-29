const mongoose = require("mongoose");
const express = require("express");
const app = express();
const passport = require("passport");
const localStrategy = require("passport-local").Strategy; // Corrected import

const session = require("express-session");
const methodOverride = require("method-override");

// MongoDB connection
mongoose.connect('mongodb+srv://franciscoadelino756:FrA31019@francisco3222.beafzh7.mongodb.net/?retryWrites=true&w=majority&appName=francisco3222', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

// Passport configuration
const User = require('./Model/UseModel'); // Assuming you have a User model
passport.use(new localStrategy (User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Express middleware setup
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.set("view engine", "ejs");

// Routes setup
const homeRoute = require("./routes/HomeRoute");
const loginRoute = require("./routes/LoginRoute");
const signupRoute = require("./routes/SignUpRoute");
const SpaceRoute = require("./routes/SpaceSoupThingsRoute");
const PlanetasRoute = require("./routes/PlanetasRoute");
const EstrelasRoute = require("./routes/EstrelasRoute");
const OutrosRoute = require("./routes/OutrosRoute");
const SuporteRoute = require("./routes/SuporteRoute");
const DesenvolvedoresRoute = require("./routes/DesenvolvedoresRoute");
const DadosRoute = require("./routes/DadosRoute");

app.use(homeRoute);
app.use(loginRoute);
app.use(signupRoute);
app.use(SpaceRoute);
app.use(PlanetasRoute);
app.use(EstrelasRoute);
app.use(OutrosRoute);
app.use(SuporteRoute);
app.use(DesenvolvedoresRoute);
app.use(DadosRoute);

// Server listening
const PORT = 3000;
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});