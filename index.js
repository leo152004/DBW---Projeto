const mongoose = require("mongoose");
const express = require("express");
const app = express();
const passport = require("passport");
const localStrategy = require("passport-local").Strategy; // Corrected import
const {Configuration, OpenAIApi} = require("openai");
const dotenv = require(dotenv);
const session = require("express-session");
const methodOverride = require("method-override");

dotenv.config();

//Configura OpenAI
const configuration = new Configuration({
   apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration);

app.post("/message", async (req, res) =>{
    try{
        const aiResponse = await openai.createChatCompletion({
            model:"gpt-3.5-turbo-0125",
            messages: [
                {
                    role: "user",
                    content: `Estes são os factos que eu sei sobre o tópico ${topic}: ${facts}. Dá me outros factos sobre o mesmo tópico`
                }
            ]
        })
        res.json({
            ai_response: aiResponse.data.choices[0].messages
        })
    } catch(error){
        console.error(error);
    }
})
app.get('/', (req, res) => {
    // Process the response data
    const responseData = processData();

    // Send the response data
    res.send(responseData);
});

function processData() {
    // Process the response data here
    return 'Processed response data';
}

module.exports = { processData };

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

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.set("view engine", "ejs");

// Routes setup
const MensagemSuporteRoute = require("./Routes/MensagemSuporteRoute");
const PaginaRoute = require("./Routes/PaginaInicialRoute");
const UserRoute = require('./Routes/userRoute');
const signupRoute = require("./routes/SignUpRoute");
const SpaceRoute = require("./routes/SpaceSoupThingsRoute");
const PlanetasRoute = require("./routes/PlanetasRoute");
const EstrelasRoute = require("./routes/EstrelasRoute");
const OutrosRoute = require("./routes/OutrosRoute");
const SuporteRoute = require("./routes/SuporteRoute");
const DesenvolvedoresRoute = require("./routes/DesenvolvedoresRoute");
const DadosRoute = require("./routes/DadosRoute");

app.use(MensagemSuporteRoute);
app.use(PaginaRoute);
app.use(UserRoute);
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