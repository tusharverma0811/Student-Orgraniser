const mongoose = require("mongoose");
require("dotenv").config();

const connectToMongo = ()=>{
     mongoose.connect(process.env.DATABASE,()=>{
        console.log("Connected to DB");
    })
}

module.exports = connectToMongo;