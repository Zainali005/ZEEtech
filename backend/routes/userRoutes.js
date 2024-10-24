const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  requestPasswordReset,
  resetPassword,
} = require("../controllers/userController");

const router = express.Router();

router.post("/v1/register", registerUser);
router.post("/v1/login", loginUser);
router.post("/logout", logoutUser);

router.post("/reset-password", requestPasswordReset); 
router.post("/reset-password/:token", resetPassword); 

module.exports = router;
