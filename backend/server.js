const express = require("express");
const cookieParser = require("cookie-parser");
const connectDB = require("./utils/db");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 5000;

app.use(express.json());
app.use(cookieParser());

connectDB();

app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
