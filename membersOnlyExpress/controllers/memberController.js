const asyncHandler = require("express-async-handler");
const Message = require("../models/message");
const Member = require("../models/member");

// Handle login form
exports.member_login_post = asyncHandler(async (req, res, next) => {
  console.log("login route is working");
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      message: "Username or Password not present",
    });
  }
  try {
    const member = await Member.findOne({ username, password });
    if (!member) {
      res.status(401).json({
        message: "Login not successful",
        error: "User not found",
      });
    } else {
      res.status(200).json({
        message: "Login successful",
        member,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "An error occured",
      error: error.message,
    });
  }
});
