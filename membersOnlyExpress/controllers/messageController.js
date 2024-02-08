const asyncHandler = require("express-async-handler");
const Message = require("../models/message");
const Member = require("../models/member");

// Display homepage (not logged in - shows messages but not author of message)
exports.index = asyncHandler(async (req, res, next) => {
  const allMessages = await Message.find().sort({ timestamp: -1 }).exec();

  res.send(allMessages);
});

// Handle message create on POST
exports.message_create = asyncHandler(async (req, res, next) => {
  const message = new Message({
    timestamp: new Date(),
    message: req.body.message,
    memberId: req.body.id,
  });

  await message.save();
  res.send(201);
});

// Handle message update on PATCH
exports.message_update = asyncHandler(async (req, res, next) => {
  // 0. Do a console log and hit with postman
  console.log("update message test in postman: ", req.params.id);
  // 1. Find message trying to update from route parameter id
  // req.params.id
  await Message.findByIdAndUpdate(req.params.id, {
    message: req.body.message,
    memberId: req.body.memberId,
  }).exec();
  // 4. send back response
  res.send(204);
});

// Handle delete message on DELETE
exports.message_delete = asyncHandler(async (req, res, next) => {
  // 0. Do a console log and hit with postman
  console.log("delete postman working");
  // 1. Find message trying to delete from route parameter id
  await Message.findByIdAndDelete(req.params.id).exec();
  // 3. Send back response
  res.send(204);
});
