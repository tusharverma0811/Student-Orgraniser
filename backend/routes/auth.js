const express = require("express");
const User = require("../models/user.js");
const router = express.Router();
const { body, validationResult } = require("express-validator");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const authorizeuser = require("../middlewares/authorizeuser.js");

//Creating a new user using POST: "/auth/createuser"
router.post("/createuser", [body("email").isEmail()], async (req, res) => {
  const errors = validationResult(req);

  //If there are errors in the request body such as the email is not a valid one then return a status of 400.
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    let user = await User.findOne({ email: req.body.email });

    //If No User with the current email.
    if (!user) {
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
      });

      //Setting the user id as our payload(data) for JWT
      const payload = {
        user: {
          id: user._id,
        },
      };

      const authToken = jwt.sign(payload, "dhaamsuproject");
      return res.json({ authToken });
    }
    //If a user aldready exists
    else {
      return res
        .status(400)
        .json({ error: "User with this email aldready exists" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Some Internal Error Occured" });
  }
});

//Logging User In using POST:"/auth/login"

router.post("/login", [body("email").isEmail()], async (req, res) => {
  const errors = validationResult(req);

  //If there are errors in the request body
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    let user = await User.findOne({ email: req.body.email });

    //If no exisiting user found with requested email
    if (!user) {
      return res.status(400).json({ error: "No User found with this email" });
    }

    const payload = {
      user: {
        id: user._id,
      },
    };

    const authToken = jwt.sign(payload, "dhaamsuproject");

    res.json({ authToken });
  } catch (err) {
    console.log(err);

    return res.status(500).json({ error: "Some Internal Error Occured" });
  }
});
//If Google Signin opted store details in local db using : POST /auth/firebaseuser(Login not required)

router.post("/firebaseuser", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    //User is not present beforehand so add details
    if (!user) {
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
      });
    }

    //Set payload(data) for JWT
    const payload = {
      user: {
        id: user._id,
      },
    };

    const authToken = jwt.sign(payload, "dhaamsuproject");

    return res.json({ authToken });
  } catch (err) {
    console.log(err);

    return res.status(500).json({ error: "Some Internal Error Occured" });
  }
});

//Get logged in user details using : GET /auth/getuser (login required)

router.get("/getuser", authorizeuser, async (req, res) => {
  //Get the current user id which was appended to the request by authorizeuser middleware
  const userId = req.user.id;

  try {
    let user = await User.findById(userId);
    return res.json({ user });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Some Internal Error Occurred" });
  }
});

module.exports = router;
