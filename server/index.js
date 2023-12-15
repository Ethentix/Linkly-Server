const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

const app = express();

app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.static('./public'))

app.get("/", (req, res) => {
  res.json({
    message: "Linky - Simplifying Links",
  });
});

app.post("/url/:id", (req, res) => {});
app.get("/:id", (req, res) => {});
app.post("/url", (req, res) => {});

const port = process.env.PORT || 5500;
app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
