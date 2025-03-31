const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

// 💾 Database Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// 📌 Routes
const userRoutes = require("./routes/user.routes");
app.use("/api/users", userRoutes);

// 🔥 Start Server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));




const FallEvent = require("./models/falldetection.model");

async function testInsert() {
    const newFall = new FallEvent({
        user_id: "650b45f8a2c4a5f3d8e4a6b2", // Replace with an actual user ID
        location: "Living Room",
        impact_severity: "Hard",
        activity_before_fall: "Walking",
        user_response: "Unconscious",
        fall_confirmed: true,
        sensor_data: {
            accelerometer: { x: 0.5, y: 1.2, z: 0.3 },
            gyroscope: { x: 0.1, y: 0.2, z: 0.3 },
            barometer: 1013,
            heart_rate: 72,
            spo2: 98
        }
    });

    await newFall.save();
    console.log("✅ Test fall event inserted");
}

testInsert();
