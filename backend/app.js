const express = require("express");
const app = express();
require("colors");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

// APIsecurity
app.use(helmet());

//handle CORs error
app.use(cors());

//Logger
app.use(morgan("tiny"));

// set body bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3001;

// Load routers
const userRouter = require("./src/routers/user.router");
const ticketRouter = require("./src/routers/ticket.router");

// Use Routers
app.use("/v1/user", userRouter);
app.use("/v1/ticket", ticketRouter);

app.use("/", (req, res) => {
  res.json({ message: "Hi there!!~~~" });
});

app.listen(port, () => {
  console.log(`API is ready on http://localhost:${port}`.bgMagenta.white);
});
