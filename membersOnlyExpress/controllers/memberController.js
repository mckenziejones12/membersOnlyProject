const asyncHandler = require("express-async-handler");
const Message = require("../models/message");
const Member = require("../models/member");

// Display login form
exports.member_login_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: login form (get)");
});

// Handle login form
exports.member_login_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: login form (post)");
});
