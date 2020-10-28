const express = require('express');
const handlebars = require('express3-handlebars').create({ defaultLayout: 'main' });

var app = express();

app.engine("handlebars", handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("Home");
});
app.get("/users", (req, res) => {
    res.render("Users"); 
});
app.get('/ok', (req, res) => {
    res.render('Dynamic',{"dyn":"Hello its generated dynamically"}); 
});

app.listen(4000, () => {
    console.log("Server connected");
});