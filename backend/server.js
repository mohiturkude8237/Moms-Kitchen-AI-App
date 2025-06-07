
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

// Routes
const aiRoutes = require("./routes/aiRoutes");
const recipeRoutes = require("./routes/recipeRoutes");
const auth = require("./middleware/auth");
const signupRoutes = require("./routes/signup");
const loginRoutes = require("./routes/login");
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// ✅ Updated CORS Setup: Allow both local and Vercel frontend
app.use(cors({
  origin: [
    "http://localhost:5173"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// ✅ Handle preflight requests
app.options("*", cors());

app.use(express.json());
app.use(bodyParser.json());

// API Routes
app.use("/api", aiRoutes);
app.use("/api/recipes", recipeRoutes);
app.use("/api/signup", signupRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/contact", contactRoutes);

// 🔐 Protected route example
app.get("/api/profile", auth, (req, res) => {
  res.send(`Welcome, user ID: ${req.user.userId}`);
});

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// ✅ Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
