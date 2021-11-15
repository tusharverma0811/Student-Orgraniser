const express = require("express");
const cors = require("cors");
const connectToMongo = require(__dirname+"/db");

const app = express();
connectToMongo();

app.use(cors());
app.use(express.json());

app.use("/auth",require(__dirname+"/routes/auth.js"));

app.listen(5000,()=>{
    console.log("Server up and running");
})
