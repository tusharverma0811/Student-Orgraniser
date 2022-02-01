const jwt = require("jsonwebtoken");
require("dotenv").config();

const authorizeuser = (req, res, next) => {
  const token = req.header("auth-token");

  if (!token) {
    res.status(401).json({ error: "Invalid Session" });
  }

  try {
    const data = jwt.verify(token, "dhaamsuproject");
    req.user = data.user;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ error: "Unathorized" });
  }
};

module.exports = authorizeuser;
