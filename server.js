const express = require('express');
const exphbs = require("express-handlebars");
const routes = require('./routes/routes.js');

const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/', express.static(__dirname + '/public'))

routes(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () { 
    console.log('Listening on http://localhost:' + PORT);
})