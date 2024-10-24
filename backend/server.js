const express = require("express");
const cookieParser = require("cookie-parser");
const connectDB = require("./utils/db");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:3000", 
  credentials: true,
}));

connectDB();

app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
