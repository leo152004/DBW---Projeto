const express = require("express");
const app = express();
app.set("view engine", "ejs"); //método para configurar a nossa view engine para “ejs”

app.use(express.static(__dirname + "/public"));// é uma função middleware no framework Express.js para Node.js queserve arquivos estáticos, como imagens, arquivos CSS e JavaScript.
app.use(express.urlencoded({ extended: true })); // é uma função middleware do Express.js que é usada para analisardados de formulários HTML que são enviados para o servidor

const homeRoute = require("./routes/HomeRoute");
app.use(homeRoute);

const loginRoute = require("./routes/LoginRoute");
app.use(loginRoute);

const signupRoute = require("./routes/SignUpRoute");
app.use(signupRoute);

const SpaceRoute = require("./routes/SpaceSoupThingsRoute");
app.use(SpaceRoute);

const PlanetasRoute = require("./routes/PlanetasRoute");
app.use(PlanetasRoute);

const EstrelasRoute = require("./routes/EstrelasRoute");
app.use(EstrelasRoute);

const OutrosRoute = require("./routes/OutrosRoute");
app.use(OutrosRoute);

const SuporteRoute = require("./routes/SuporteRoute");
app.use(SuporteRoute);

const DesenvolvedoresRoute = require("./routes/DesenvolvedoresRoute");
app.use(DesenvolvedoresRoute);

const DadosRoute = require("./routes/DadosRoute");
app.use(DadosRoute);

app.listen(3000, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", 3000);
});
