const mongoose = require("mongoose");

const connectToMongo = ()=>{
     mongoose.connect("mongodb+srv://admin-tushar:tushar0811@cluster0.w3h0a.mongodb.net/studentframeDB?retryWrites=true&w=majority",()=>{
        console.log("Connected to DB");
    })
}

module.exports = connectToMongo;