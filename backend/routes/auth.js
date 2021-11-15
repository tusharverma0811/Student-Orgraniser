const express = require("express");
const User = require("../models/user.js");
const router = express.Router();
const {body, validationResult} = require("express-validator");
require("dotenv").config();
const jwt = require("jsonwebtoken");

//Creating a new user using POST: "/auth/createuser"
router.post(
    "/createuser",
    [body("email").isEmail()],
    async(req,res)=>{
        const errors = validationResult(req);

        //If there are errors in the request body such as the email is not a valid one then return a status of 400.
        if(!errors.isEmpty()){
           return res.status(400).json({errors:errors.array()});
        }

        try{
           let user = await User.findOne({email:req.body.email});
           
           //If No User with the current email.
           if(!user){
               user = await User.create({
                   name:req.body.name,
                   email:req.body.email,
                   password:req.body.password
               });

               //Setting the user id as our payload(data) for JWT
               const payload = {
                   user:{
                       id:user._id
                   }
               }

               const authToken = jwt.sign(payload,process.env.SIGN);
               return res.json({authToken});
           }
           //If a user aldready exists
           else{
                return res.status(400).json({error:"User with this email aldready exists"});
           }
        }catch(err){
            console.log(err);
            return res.status(500).json({error:"Some Internal Error Occured"});
        }
    }
);

//Logging User In using POST:"/auth/login"

router.post(
    "/login",
    [
        body("email").isEmail(),
        body("password").exists(),
    ],
    async(req,res)=>{
        const errors = validationResult(req);

        //If there are errors in the request body
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }

        try{
            let user = await User.findOne({email:req.body.email});

            //If no exisiting user found with requested email
            if(!user){
                return res.status(400).json({error:"No User found with this email"})
            }

            //If Password is not correct
            if(req.body.password !== user.password){
                return res.status(400).json({error:"Try logging in with correct credentials"});
            }

            const payload = {
                user:{
                    id:user._id
                }
            }

            const authToken = jwt.sign(payload,process.env.SIGN);

            res.json({authToken});
        }catch(err){
            console.log(err);

            return res.status(500).json({error:"Some Internal Error Occured"});
        }
    }
);

module.exports = router;