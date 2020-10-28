const express = require('express');
const handleBars = require('express3-handlebars').create({ defaultLayout: 'main' });
const bodyParser = require('body-parser');
var app = express();

app.engine("handlebars", handleBars.engine); // setting the engine at handlebars
app.set('view engine', 'handlebars');        // using the engine as view engine template
app.use(express.static(__dirname + "/public")); // setting the static folder to reduce overhead 
app.use(bodyParser.urlencoded({ extended: false })); // using bodyParser middleware to access req.body

app.get("/", (req, res) => {
    res.render("Home");
});
app.post("/", (req, res) => {
    console.log("Post");
    if (req.body.Text == "praj")
        res.redirect("/");
    else
        res.redirect("/users");
    
    
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