const mongoose = require("mongoose");

const FallEventSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  timestamp: { type: Date, default: Date.now },
  location: { type: String }, // e.g., "Living Room"
  impact_severity: { type: String, enum: ["Light", "Moderate", "Hard"] },
  activity_before_fall: { type: String }, // e.g., "Walking"
  user_response: { type: String, enum: ["Conscious", "Unconscious", "Responsive"] },
  fall_confirmed: { type: Boolean, default: false },
  sensor_data: {
    accelerometer: {
      x: { type: Number },
      y: { type: Number },
      z: { type: Number }
    },
    gyroscope: {
      x: { type: Number },
      y: { type: Number },
      z: { type: Number }
    },
    barometer: { type: Number },
    heart_rate: { type: Number },
    spo2: { type: Number }
  }
});

const FallEvent = mongoose.model("FallEvent", FallEventSchema);
module.exports = FallEvent;
