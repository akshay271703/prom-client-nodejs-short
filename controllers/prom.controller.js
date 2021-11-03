const metrics = require("../promClient");

module.exports.handleCounterIncrement = (req, res) => {
  metrics.counter.inc();
  res.send({ message: "Success" });
};

module.exports.handleCounterReset = (req, res) => {
  metrics.counter.reset();
  res.send({ message: "Success" });
};

module.exports.handleGaugeIncrement = (req, res) => {
  metrics.gauge.inc();
  res.send({ message: "Success" });
};

module.exports.handleGaugeDecrement = (req, res) => {
  metrics.gauge.dec();
  res.send({ message: "Success" });
};

module.exports.handleGaugeSetValue = (req, res) => {
  metrics.gauge.set(Number(req.params.value));
  res.send({ message: "Success" });
};

module.exports.handleHistogramValue = (req, res) => {
  metrics.histogram.observe(Number(req.params.value));
  res.send({ message: "Success" });
};

module.exports.handleSummaryValue = (req, res) => {
  metrics.summary.observe(Number(req.params.value));
  res.send({ message: "Success" });
};
