const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/userController");
const router = express.Router();

router.post("/v1/register", registerUser);
router.post("/v1/login", loginUser);
router.post("/logout", logoutUser);

module.exports = router;
