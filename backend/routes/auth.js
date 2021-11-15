const express = require("express");
const User = require("../models/user.js");
const router = express.Router();
const {body, validationResult} = require("express-validator");


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

               return res.json({user:user});
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
    [body("email").isEmail,
     body("password").exists()],
     async(req,res)=>{
        const errors = validationResult(req);

        //If error with request body:
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }

        try{
            let user = await User.findOne({email:req.body.email});

            if(!user){
                return res.status(400).json({error:"No User found try signing up first"});
            }else{
                if(user.password === req.body.password){
                    return res.json({success:"Successfully logged in"});
                }else{
                    return res.status(400).json({error:"Try logging in with valid credentials"});
                }
            }
        }catch(err){
            console.log(err);
            res.status(500).json({error:"Some Internal Error Occured"});
        }
     }
);

module.exports = router;