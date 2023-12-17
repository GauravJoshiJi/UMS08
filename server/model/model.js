const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  gender: String,
  status: String,
});

const Userdb = mongoose.model("UMS08", schema);
module.exports = Userdb;
