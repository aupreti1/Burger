var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

// Links Controller
var routes = require('./controllers/burgers_controller.js');

// Listen on PORT
app.use(routes);
app.listen(PORT, function () {
    console.log("Server listening: http://localhost:" + PORT);
});