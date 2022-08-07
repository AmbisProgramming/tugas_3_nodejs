const mongoose = require("mongoose");

//setup Schema

const SiswaSchema = mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },

  tanggallahir: String,

  jeniskelamin: String,

  hobi: String,

  create_date: {
    type: Date,
    default: Date.now,
  },
});

const Siswa = (module.exports = mongoose.model("siswa", SiswaSchema));
module.exports.get = function (callback, limit) {
  Siswa.find(callback).limit(limit);
};
