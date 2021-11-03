const client = require("prom-client");
const collectDefaultMetrics = client.collectDefaultMetrics;

// Prom Client Metrics

// Type 1 : Counter
const counter = new client.Counter({
  name: "type_counter",
  help: "Any Arbitary value to help identify this counter",
});

// Type 2 : Gauge
const gauge = new client.Gauge({
  name: "type_gauge",
  help: "Any Arbitary value to help identify this gauge",
});

// Type 3 : Histogram
const histogram = new client.Histogram({
  name: "type_histogram",
  help: "Any Arbitary value to help identify this histogram",
});

// type 4 : Summaries
const summary = new client.Summary({
  name: "type_summary",
  help: "Any Arbitary value to help identify this summary",
});

const metrics = {
  counter,
  gauge,
  histogram,
  summary,
};

// Collect Promethues Default metrics
collectDefaultMetrics();

module.exports = metrics;
