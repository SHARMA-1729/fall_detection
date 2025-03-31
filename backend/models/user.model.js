const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  full_name: { type: String, required: true },
  age: { type: Number, required: true, min: 1 },
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  medical_history: { type: String },
  medications: { type: String },
  mobility_issues: { type: String },
  emergency_contacts: [
    {
      contact_name: { type: String, required: true },
      relationship: { type: String, required: true },
      phone_number: { type: String, required: true },
      email: { type: String }
    }
  ]
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
