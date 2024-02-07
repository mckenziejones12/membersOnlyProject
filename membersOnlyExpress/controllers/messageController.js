const asyncHandler = require("express-async-handler");
const Message = require("../models/message");
const Member = require("../models/member");

// Display homepage (not logged in - shows messages but not author of message)
exports.index = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: homepage (not logged in)");
});

// Display list of all messages once logged in with author of message shown
exports.message_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: list of all messages (logged in)");
});

// Display message create on GET
exports.message_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: create new message (get)");
});

// Handle message create on POST
exports.message_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: create new message (post)");
});

// Display message update on GET
exports.message_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: update message (get)");
});

// Handle message update on POST
exports.message_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: update message (post)");
});

// Display delete message on GET
exports.message_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: delete message (get)");
});

// Handle delete message on POST
exports.message_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: delete message post");
});
