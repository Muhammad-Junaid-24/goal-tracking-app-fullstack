const express = require("express");
const colors = require('colors')
require("dotenv").config();
const { goalRouter } = require("./routes/goal-router");
const {errorHandler, errorGenerator} = require('./middleware/error-middleware') 
const connectDB = require('./config/db')

connectDB();
const app = express();

app.use(express.json());

app.use("/api/goals", goalRouter);
app.use(errorGenerator, errorHandler)

const PORT = process.env.DEV_PORT;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
