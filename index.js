const express = require("express");
const cors = require("cors");
const user = require("./app/routes/user");

const app = express();
cors(app);

app.use(express.json());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.get("/api/v1/health", async (req, res) => {
  res.json({ health: true });
});

app.use("/api/v1/user/", user());

app.listen(8080, () => {
  console.log("Server runnign on port 8080");
});
