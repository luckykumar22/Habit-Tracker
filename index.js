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
app.use(expressLayouts)
app.use('/assets',express.static('/assets'))
app.set('view engine', 'ejs')
app.set("views", "./views");

//------BodyParser--------//
app.use(express.urlencoded({extended:false}))

//---------Connect Flash----------//
app.use(flash())

//---------Express Session----------//
app.use(
    session({
        secret:'secret',
        resave:true,
        saveUninitialized:true
    })
)

//---------Global Variables----------//



//-----Routes---------//
app.use

app.listen(port, function(err){
    if(err){ console.log(`Error starting the server`)}
    console.log(`Server up & running on PORT:`, port)
});
