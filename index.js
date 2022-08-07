const express = require("express");

const mongoose = require("mongoose");

const bodyParser = require("express");

const app = express();

const port = 8000;

const apiRouter = require("./api-routes");

//Set default route

app.get("/", (req, res) => {
  res.json({
    status: "Api berhasil dijalankan",
    message: "Sukses",
  });
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.use("/api", apiRouter);

mongoose.connect("mongodb://localhost/siswa");
const db = mongoose.connection;

app.listen(port, () => {
  console.log(`Server berjalan pada port ${port}`);
});
