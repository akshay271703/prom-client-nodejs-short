const express = require("express");
const app = express();

app.use("/metrics", require("./routes/metrics.route"));
app.use("/prom", require("./routes/prom.route"));

app.listen(process.env.PORT || 3000, () => {
  console.log("Started");
});
