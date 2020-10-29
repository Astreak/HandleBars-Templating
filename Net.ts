//eslint
const express = require('express');
const handleBars = require('express3-handlebars').create({
    defaultLayout: 'main', 'helpers': {
        'if_equal': (a, b) => {
            if (a == b)
                return b;
            else
                return 'No Auth';
        }
    }});
const bodyParser = require('body-parser');
const member = require('./Student.ts');
var app = express();

app.engine("handlebars", handleBars.engine); // setting the engine at handlebars
app.set('view engine', 'handlebars');        // using the engine as view engine template
app.use(express.static(__dirname + "/public")); // setting the static folder to reduce overhead 
app.use(bodyParser.urlencoded({ extended: false })); 
var JSO = [
    { 'name': 'praj', 'age': 12, 'ok': 34 },
    {'name':'john',age:34,'ok':undefined}
]
var A = [];


app.get("/", (req, res) => {
    var y = "";
    if (req.headers.cookie) {
        y = req.headers.cookie.split(';')[1].split('=')[1];
    }
    
    res.render("home",{'temp':JSO});
});
app.post("/", (req, res) => {
    console.log("Post");
    let n = new member(req.body.username, req.body.password);
    A.push(n);
    res.cookie("name", req.body.username);
    res.cookie('password', req.body.password);
    if (req.body.Text == "praj")
        res.redirect(303,"/");
    else
        res.redirect(303,"/");
    
    
});
app.get("/users", (req, res) => {
    
    let k = req.headers.cookie.split('=')[1];
    
    if (k == 'praj')
        res.render("Users");
    else
        res.redirect('/ok');
});
app.get('/api', (req, res) => {
    res.json(JSO); 
});
app.get('/server', (req, res) =>{
    A.forEach((i) => {
        console.log(i);
    });
    res.redirect("/");
})
app.get('/ok', (req, res) => {
    res.render('Dynamic',{"dyn":"Not Authorized"}); 
});

app.listen(4000, () => {
    console.log("Server connected");
});