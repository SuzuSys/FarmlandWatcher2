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