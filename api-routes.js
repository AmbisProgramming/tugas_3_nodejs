const express = require("express");
const router = express.Router();

//Set default api respon
router.get("/", (req, res) => {
  res.json({
    status: "API berhasil berjalan",
    message: "Welcome to backend Siswa",
  });
});

const siswaController = require("./siswaController");

//Siswa Routes
router.route("/siswa").get(siswaController.index).post(siswaController.new);
router.route("/siswa/:siswa_id").get(siswaController.view).patch(siswaController.update).put(siswaController.update).delete(siswaController.delete);

module.exports = router;
