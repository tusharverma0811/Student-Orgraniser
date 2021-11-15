const mongoose = require("mongoose");

const connectToMongo = ()=>{
     mongoose.connect("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false",()=>{
        console.log("Connected to DB");
    })
}

module.exports = connectToMongo;