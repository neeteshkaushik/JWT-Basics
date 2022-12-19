require("dotenv").config();
require("express-async-errors");
const express = require("express");
const notFound = require("./middlewares/not-found");
const errorHandler = require("./middlewares/errorHandler");
const router = require("./routes/main");
const app = express();

const port = 3000;
app.use(express.json());

app.use("/api/v1", router);

app.use(notFound);
app.use(errorHandler);
const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server running on port ${port} ...`);
    });
  } catch (error) {}
};

start();
