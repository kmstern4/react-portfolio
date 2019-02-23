const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/public')));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});