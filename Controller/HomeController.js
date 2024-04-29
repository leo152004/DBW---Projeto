
const indexController=function (req, res) {
    res.render("index");
};
//INDEX => VAI POPULAR TODOS OS LIVROS NO INDEX
const indexView = async function (req, res) {
    if (!req.isAuthenticated()) { // Se não está autenticado, vai para o login!
        console.log("Nop, não tem acesso!");
        return res.redirect("/login");
    }
    res.render("index"); //Mostra todos os livros encontrador no index.ejs
};
module.exports = { indexController,indexView };
