const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    subName:{
        type:String,
        required:true
    },
    routine:{
        type: [{day:String,time:Date,link:String}]
    }
});

module.exports = new mongoose.model("Subject",subjectSchema);