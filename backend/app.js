require("dotenv").config();
const express = require("express");
const app = express();
require("colors");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const port = process.env.PORT || 3001;

// APIsecurity
app.use(helmet());

//handle CORs error
app.use(cors());

// MongoDB Connection Setup
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

if (process.env.NODE_ENV !== "production") {
  const mDb = mongoose.connection
  mDb.once("open", () => {
    console.log("MongoDB 접속 하였습니다.!~~~~".bgBlue.white)
  });

  mDb.once("error", () => {
    console.log("MongoDB 접속 안됨!~~~~".bgRed.white)
  });

  //Logger
  app.use(morgan("tiny"));
}

// set body bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// Load routers
const userRouter = require("./src/routers/user.router");
const ticketRouter = require("./src/routers/ticket.router");

// Use Routers
app.use("/v1/user", userRouter);
app.use("/v1/ticket", ticketRouter);

// Error Handle
const handleError = require("./src/utils/errorHandler.js");
app.use((req, res, next) => {
  const error = new Error("Resources not found!!");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  handleError(error, res);
});

app.listen(port, () => {
  console.log(`API is ready on http://localhost:${port}`.bgMagenta.white);
});
