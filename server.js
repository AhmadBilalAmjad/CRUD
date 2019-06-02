// External Modules
const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser");

// Internal Modules
const Task = require("./Api/models/crudModel"),
  routes = require("./Api/routes/crudRoutes");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/TodoDB");

// Setting bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Registering the route
routes(app);

// Starting Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
