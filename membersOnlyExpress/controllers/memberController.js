const asyncHandler = require("express-async-handler");
const Message = require("../models/message");
const Member = require("../models/member");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.SECRET_TOKEN;
const bcrypt = require("bcryptjs");
const member = require("../models/member");

// Handle login form
exports.member_login_post = asyncHandler(async (req, res, next) => {
  console.log("login route is working");
  console.log(jwtSecret);
  const { username, password } = req.body;
  // Check if username and password is provided
  if (!username || !password) {
    return res.status(400).json({
      message: "Username or Password not present",
    });
  }
  try {
    const member = await Member.findOne({ username });
    if (!member) {
      res.status(401).json({
        message: "Login not successful",
        error: "User not found",
      });
    } else {
      // compare given password with hashed password
      bcrypt.compare(password, member.password).then((result) => {
        if (result) {
          const maxAge = 2 * 60 * 60; // 3 hours in seconds
          const token = jwt.sign({ id: member._id, username }, jwtSecret, {
            expiresIn: maxAge,
          });
          res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: maxAge * 1000, // 3 hours in milliseconds
          });
          res.status(201).json({
            message: "Login successful",
            member: member._id,
          });
        } else {
          res.status(400).json({
            message: "Login not successful",
          });
        }
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "An error occured",
      error: error.message,
    });
  }
});
