const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// 💾 Database Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// 📌 Routes
const userRoutes = require("./routes/user.routes");
const fallRoutes = require('./routes/fallRoutes');
const alertRoutes = require('./routes/alert.routes');
app.use("/api/users", userRoutes);
app.use('/api/falls', fallRoutes);
app.use('/api', alertRoutes);  // POST /api/alert

// 🔥 Start Server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));




