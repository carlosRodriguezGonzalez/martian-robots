const { Router } = require("express");
const { exploreWorld } = require("../controllers/robot.controller");

const router = Router();
router.post("/", exploreWorld);

module.exports = router;
