const express = require("express");
const cors = require("cors");
const multer = require("multer");
const mongoose = require("mongoose");
// begin{debug setting}
const fs = require("fs-extra");
const out = fs.createWriteStream("info.log");
const logger = new console.Console(out);
logger.log('---ERROR STORAGE---');
// end{debug setting}

const connectOption = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect("mongodb://localhost/MemorizationApplication", connectOption);
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT || 3000);