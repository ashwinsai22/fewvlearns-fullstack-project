require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { initializeConnection } = require("./config/database");

const app = express();

/* -------------------------
   Body Parser
   ------------------------- */
app.use(express.json());

/* -------------------------
   CORS FIX (IMPORTANT)
   ------------------------- */
const allowedOrigins = [
  "http://localhost:5173",
  "https://academy.bezawada.link"
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (Postman, curl)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);

// 🔥 VERY IMPORTANT: handle preflight
app.options("*", cors());

/* -------------------------
   Health Check
   ------------------------- */
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

/* -------------------------
   Routes
   ------------------------- */
const authRoutes = require("./routes/authRoutes");
const checkoutRoutes = require("./routes/checkoutRoutes");
const courseRoutes = require("./routes/courseRoutes");
const videoRoutes = require("./routes/videoRoutes");
const purchasedCoursesRoutes = require("./routes/purchasedCoursesRoutes");
const storePurchaseRoutes = require("./routes/storePurchaseRoutes");
const courseContentRoutes = require("./routes/courseContentRoutes");

app.use("/auth", authRoutes);
app.use("/checkout", checkoutRoutes);
app.use("/courses", courseRoutes);
app.use("/videos", videoRoutes);
app.use("/purchased", purchasedCoursesRoutes);
app.use("/store-purchase", storePurchaseRoutes);
app.use("/course-content", courseContentRoutes);

/* -------------------------
   Server Startup
   ------------------------- */
initializeConnection()
  .then(() => {
    const port = process.env.PORT || 3000;
    app.listen(port, "0.0.0.0", () => {
      console.log(`✅ Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ Error initializing database connection:", err);
  });
