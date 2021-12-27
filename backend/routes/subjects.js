const express = require("express");
const authorizeuser = require("../middlewares/authorizeuser.js");
const router = express.Router();
const Subject = require("../models/subject.js");


//Add a Subject with routine using : POST /subject/addsubject (login required)
router.post(
    "/addsubject",
    authorizeuser,
    async(req,res)=>{

        try{
            let newSubject = await Subject.create({
                subName:req.body.subName,
                routine:req.body.routine,
                user:req.user.id
            });

            return res.json({newSubject});
        }catch(err){
            console.log(err);
            return res.status(500).json({error:"Some Internal Error Occured"});
        }
    }
);

//Get All subjects of the logged in user using : GET /subject/getsubjects (login required)
router.get(
    "/getsubjects",
    authorizeuser,
    async(req,res)=>{
        try{
            //Find all the subjects of the logged in user
            const subjects = await Subject.find({user:req.user.id});
            return res.json({subjects});
        }catch(err){
            console.log(err);
            res.status(500).json({error:"Some Internal Error Occured"});
        }
    }
)

//Get details of a particular subject using : GET /subject/getsubject/subjectid (login required)
router.get(
    "/getsubject/:subjectid",
    authorizeuser,
    async (req,res)=>{
        try{
            const subject = await Subject.findById(req.params.subjectid);

            if(!subject){
                return res.status(400).json({error:"No Subject Found"});
            }

            if(subject.user.toString()!==req.user.id){
                return res.status(400).json({error:"Unathorized"});
            }

            return res.json(subject);
        }catch(err){
            console.log(err);
            return res.status(500).json({error:"Some Internal Error Occured"});
        }
    }
)

//Delete an entire subject using : DELETE /subject/deletesubject/subjectid (login required)
router.delete(
    "/deletesubject/:subjectid",
    authorizeuser,
    async(req,res)=>{
        try{
            //Find the subject to be deleted
            const subject = await Subject.findById(req.params.subjectid);

            //If no subject found with the requested id
            if(!subject){
                return res.status(400).json({error:"No Subject Found"});
            }

            //Check if the subject found belongs to the logged in user or not
            if(subject.user.toString()!==req.user.id){
                return res.status(401).json({error:"Unathorized"});
            }

            //Delete the subject
            await Subject.findByIdAndDelete(req.params.subjectid);

            return res.send("Successfully Deleted");
        }catch(err){
            console.log(err);
            return res.status(500).json({error:"Some Internal Error Occured"});
        }
    }
);

//Add a day with time in our routine using PATCH: /subject/routine/addroutine/subjectid (login required)
router.patch(
    "/routine/addroutine/:subjectid",
    authorizeuser,
    async(req,res)=>{
        try{
            const subject = await Subject.findById(req.params.subjectid);

            if(!subject){
                return res.status(400).json({error:"No Subject Found"});
            }

            if(subject.user.toString()!== req.user.id){
                return res.status(401).json({error:"Unathorized"});
            }

            await Subject.findByIdAndUpdate(req.params.subjectid,
                {$push : {"routine":req.body}},
                {safe :true , upsert:true}
            );

            return res.json({Success:"Successfully Added"});
        }catch(err){
            console.log(err);
            return res.status(500).json({error:"Some Internal Error Occured"});
        }
    }
)

// Delete a day from routine using DELETE: /subject/routine/deleteroutine/subjectid/routineid (login required)
router.delete(
    "/routine/deleteroutine/:subjectid/:routineid",
    authorizeuser,
    async(req,res)=>{
        try{
            const subject = await Subject.findById(req.params.subjectid);

            if(!subject){
                return res.status(400).json({error:"No Subject Found"});
            }

            if(subject.user.toString()!==req.user.id){
                return res.status(401).json({error:"Unathorized"});
            }

            await Subject.findByIdAndUpdate(req.params.subjectid,
                {$pull:{"routine":{_id:req.params.routineid}}});
            
            return res.json({Success:"Successfully Deleted"});
        }catch(err){
            console.log(err);
            return res.status(500).json({error:"Some Internal Error Occured"});
        }
    }
)

//Update day/time/link of an existing subject using PATCH: /subject/routine/updateroutine/subjectid/routineid (login required)

router.patch(
    "/routine/updateroutine/:subjectid/:routineid",
    authorizeuser,
    async(req,res)=>{
        try{
            const subject = await Subject.findById(req.params.subjectid);

            if(!subject){
                return res.status(400).json({error:"No Subject Found"});
            }

            if(subject.user.toString()!==req.user.id){
                return res.status(401).json({error:"Unathorized"});
            }

            const newRoutine = {};
            const {day,time,link} = req.body;

            if(day){
                newRoutine.day = day;
            }else{
                newRoutine.day = subject.day;
            }

            if(time){
                newRoutine.time = time;
            }else{
                newRoutine.time = subject.time;
            }

            if(link){
                newRoutine.link = link;
            }else{
                newRoutine.link = subject.link;
            }

            await Subject.findOneAndUpdate({"routine._id":req.params.routineid},
                {"$set":{
                    "routine.$.day":newRoutine.day,
                    "routine.$.time":newRoutine.time,
                    "routine.$.link":newRoutine.link
                }}
            );
            
            return res.json({Success:"Successfully Updated"});
        }catch(err){
            console.log(err);
            res.status(500).json({error:"Some Internal Error Occured"});
        }
    }
)
module.exports = router;

