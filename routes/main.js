const express = require("express");
const { login, dashBoard } = require("../controllers/main");
const authMiddleWare = require("../middlewares/auth");
const router = express.Router();

router.route("/login").post(login);
router.route("/dashboard").get(authMiddleWare, dashBoard);

module.exports = router;
