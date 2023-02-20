const express = require("express");
require("dotenv").config();
const { goalRouter } = require("./routes/goal-router");
const {errorHandler, errorGenerator} = require('./middleware/error-middleware') 
const app = express();

app.use(express.json());

app.use("/api/goals", goalRouter);
app.use(errorGenerator, errorHandler)

const PORT = process.env.DEV_PORT;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
