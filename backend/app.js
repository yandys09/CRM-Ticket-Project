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
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const port = process.env.PORT || 3001;

// Routers
app.use("/", (req, res) => {
  res.json({ message: "Hi there!!~~~" });
});

app.listen(port, () => {
  console.log(`API is ready on http://localhost:${port}`.bgMagenta.white);
});
