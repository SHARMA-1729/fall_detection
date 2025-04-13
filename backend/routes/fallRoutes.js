const express = require("express");
const router = express.Router();
const {
  createFallEvent,
  getAllFallEvents,
  getFallEventsByUser,
  updateFallConfirmation,
  deleteFallEvent
} = require("../controllers/falldetection.controller");

// Create a new fall event
router.post("/", createFallEvent);

// Get all fall events
router.get("/", getAllFallEvents);

// Get fall events for a specific user
router.get("/user/:userId", getFallEventsByUser);

// Update fall confirmation status
router.patch("/:id/confirm", updateFallConfirmation);

// Optional: Delete a fall event
router.delete("/:id", deleteFallEvent);

module.exports = router;
