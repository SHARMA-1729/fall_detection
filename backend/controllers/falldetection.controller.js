const FallEvent = require("../models/falldetection.model");
const User = require("../models/user.model");

// ✅ Create a new fall event
exports.createFallEvent = async (req, res) => {
  try {
    const { user_id, location, impact_severity, activity_before_fall, user_response, sensor_data } = req.body;
    
    // Check if user exists
    const userExists = await User.findById(user_id);
    if (!userExists) return res.status(404).json({ message: "User not found" });

    const fallEvent = new FallEvent({
      user_id,
      location,
      impact_severity,
      activity_before_fall,
      user_response,
      fall_confirmed: false, // Initially false, can be updated after verification
      sensor_data
    });

    await fallEvent.save();
    res.status(201).json({ message: "Fall event recorded successfully", fallEvent });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// 📌 Get all fall events
exports.getAllFallEvents = async (req, res) => {
  try {
    const fallEvents = await FallEvent.find().populate("user_id", "full_name age emergency_contacts");
    res.status(200).json(fallEvents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Get fall events for a specific user
exports.getFallEventsByUser = async (req, res) => {
  try {
    const userId = req.params.user_id;
    const fallEvents = await FallEvent.find({ user_id: userId });
    res.status(200).json(fallEvents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Update a fall event (e.g., confirm fall detection)
exports.updateFallEvent = async (req, res) => {
  try {
    const fallEvent = await FallEvent.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!fallEvent) return res.status(404).json({ message: "Fall event not found" });
    res.status(200).json({ message: "Fall event updated successfully", fallEvent });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ❌ Delete a fall event
exports.deleteFallEvent = async (req, res) => {
  try {
    const fallEvent = await FallEvent.findByIdAndDelete(req.params.id);
    if (!fallEvent) return res.status(404).json({ message: "Fall event not found" });
    res.status(200).json({ message: "Fall event deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
