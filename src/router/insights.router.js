const { Router } = require("express");
const { getGrids, getGridById } = require("../controllers/insights.controller");

const router = Router();
router.get("/", getGrids);
router.get("/:gridId", getGridById);

module.exports = router;
