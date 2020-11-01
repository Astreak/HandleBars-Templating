
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const handlebars = require('express3-handlebars').create({
    defaultLayout: 'main',
    'helpers': [
        {
            'if_equal': (a, b) => {
                if (a == b)
                    return 'ok'
                else
                    return 'No Auth'
            }
        }
    ]
});

var app = express();
app.engine("handlebars", handlebars.engine);
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({'extended':false}))

var SESS_O = 'crypt';
app.use(session({
    name: SESS_O,
    secret: 'Aezakmi@1',
    saveUnInitialized: false,
    resave: true,
    
}))

var redirectHome = (req, res, next) => {
    if (req.session.name)
        res.redirect(303, '/users')
    else
        next()

}


app.get('/', redirectHome,(req, res) => {
    res.render('home');
})
app.post('/', (req, res) => {
    req.session.crypt = req.body.username
   
    res.redirect(303,'OK')
});
app.get('/users', (req, res) => {
    res.render('Users');
})
app.get('/ok', (req, res) => {
    console.log(req.session.crypt)
    res.render('Dynamic')
})
app.get('/removeCookie', (req, res) => {
    req.session.destroy()
    res.clearCookie('crypt');
    res.clearCookie('name');
    res.clearCookie('password');
    res.clearCookie('frt');

    
    res.redirect('/')
})
var PORT = process.env.port || 5000
app.listen(PORT, () => {
    console.log("This Server Connected as well")
    
})

