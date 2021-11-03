const router = require("express").Router();

const promController = require("../controllers/prom.controller");

router.get("/counter/inc", promController.handleCounterIncrement);
router.get("/counter/reset", promController.handleCounterReset);
router.get("/gauge/inc", promController.handleGaugeIncrement);
router.get("/gauge/dec", promController.handleGaugeDecrement);
router.get("/gauge/set/:value", promController.handleGaugeSetValue);
router.get("/histogram/:value", promController.handleHistogramValue);
router.get("/summary/:value", promController.handleSummaryValue);

module.exports = router;
