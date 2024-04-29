const User = require("module");
const userGet = function (req, res) {
    res.render("registar");
};
const loginGet = function (req, res) {
    res.render("login");
};
const userPost = async function (req, res) {
    const { email, username, password } = req.body;
    const user = new User({ email, username }); // cria um novo utilizador
    await User.register(user, password); //guarda os dados na BD. Register() vem do “plugin” de passport-local-mongoose
    res.redirect("/SpaceSoupThings");
};
//FAZER LOGOUT DA PÁGINA
const logout = function (req, res, next) {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect("/login");
    });
};

const loginController=function (req, res) {
    res.render("login");
};
module.exports = {userGet, userPost,loginGet,logout,loginController};