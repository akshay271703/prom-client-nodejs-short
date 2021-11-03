const router = require("express").Router();
const prom = require("prom-client");

router.get("/", async (req, res) => {
  try {
    const metrics = await prom.register.metrics();
    res.send(metrics);
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = router;
