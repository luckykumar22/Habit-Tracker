//----------- Importing Modules -----------//
const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const flash = require("connect-flash");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");

//-----DB Config---------//
const db = require("./config/mongoose");

//-----EJS---------//
app.use(expressLayouts);
app.use("/assets", express.static("/assets"));
app.set("view engine", "ejs");
app.set("views", "./views");

//------BodyParser--------//
app.use(express.urlencoded({ extended: false }));

//---------Connect Flash----------//
app.use(flash());

//---------Express Session----------//
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

//---------Global Variables----------//
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

//-----Routes---------//
app.use("/", require("./routes/index.js"));
app.use("/users", require("./routes/users"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error starting the server`);
  }
  console.log(`Server up & running on PORT:`, port);
});
