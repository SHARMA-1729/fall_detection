require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());




  
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error("MongoDB Connection Error:", err));
  

// Sample Route
app.get("/", (req, res) => res.send("API is running"));


const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
