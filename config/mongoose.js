const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/habit_tracker");

const db = mongoose.connection;

db.on("error", console.log.bind(`Error connecting to the MongoDB`));

db.once('open',function(err){
    if(err){console.log(`Error connecting to DB`)}
    console.log(`Connected to DB`)
})

module.exports = db;
