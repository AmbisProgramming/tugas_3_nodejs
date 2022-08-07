Siswa = require("./siswaModel");

//handle index action
exports.index = function (req, res) {
  Siswa.get(function (err, siswa) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "Success",
      message: "Data berhasil diambil",
      data: siswa,
    });
  });
};

exports.new = function (req, res) {
  let siswa = new Siswa();

  siswa.nama = req.body.nama ? req.body.nama : siswa.nama;
  siswa.tanggallahir = req.body.tanggallahir;
  siswa.jeniskelamin = req.body.jeniskelamin;
  siswa.hobi = req.body.hobi;

  siswa
    .save()
    .then((data) => {
      res.json({
        message: "Siswa Berhasil Di Tambahkan!",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Internal Server Error",
      });
    });
};

exports.view = function (req, res) {
  Siswa.findById(req.params.siswa_id, function (err, siswa) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      message: "Siswa detail loading ...",
      data: siswa,
    });
  });
};

exports.update = function (req, res) {
  Siswa.findById(req.params.siswa_id, function (err, siswa) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }

    siswa.nama = req.body.nama;
    siswa.tanggallahir = req.body.tanggallahir;
    siswa.jeniskelamin = req.body.jeniskelamin;
    siswa.hobi = req.body.hobi;

    siswa
      .save()
      .then((data) => {
        res.json({
          message: "Siswa berhasil diupdate",
          data: data,
        });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Internal Server error",
        });
      });
  });
};

exports.delete = function (req, res) {
  Siswa.remove(
    {
      _id: req.params.siswa_id,
    },
    function (err, siswa) {
      if (err) res.send(err);

      res.json({
        status: "Success",
        message: "Delete Siswa Success",
      });
    }
  );
};
