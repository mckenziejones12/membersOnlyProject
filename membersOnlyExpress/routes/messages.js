const express = require("express");
const router = express.Router();

// Require controller modules
const message_controller = require("../controllers/messageController");
const member_controller = require("../controllers/memberController");

/// MESSAGE ROUTES ///

// GET messages homepage
router.get("/", message_controller.index);

// POST request for creating Message
router.post("/", message_controller.message_create);

// PATCH request for updating Message
router.patch("/:id", message_controller.message_update);

// DELETE request for deleting Message
router.delete("/:id", message_controller.message_delete);

/// MEMBER ROUTES ///

// POST login form
router.route("/login").post(member_controller.member_login_post);

module.exports = router;
