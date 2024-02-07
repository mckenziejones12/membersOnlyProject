const express = require("express");
const router = express.Router();

// Require controller modules
const message_controller = require("../controllers/messageController");
const member_controller = require("../controllers/memberController");

/// MESSAGE ROUTES ///

// GET messages homepage
router.get("/", message_controller.index);

// GET request for creating Message. (Must be done before routes that display message (using Id))
router.get("/message", message_controller.message_create_get);

// POST request for creating Message
router.get("/message", message_controller.message_create_post);

// GET request for updating Message
router.get("/message/:id/update", message_controller.message_update_get);

// POST request for updating Message
router.get("/message/:id/update", message_controller.message_update_post);

// GET request for deleting Message
router.get("/message/:id/delete", message_controller.message_delete_get);

// POST request for deleting Message
router.get("/message/:id/delete", message_controller.message_delete_post);

// GET request for displaying all messages
router.get("/messages", message_controller.message_list);

/// MEMBER ROUTES ///

// GET login form
router.get("/login", member_controller.member_login_get);

// POST login form
router.get("/login", member_controller.member_login_post);

module.exports = router;
