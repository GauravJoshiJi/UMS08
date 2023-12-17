const mongoose = require("mongoose");

const Mongodb = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongodb is connected: ${con.connection.host}`);
  } catch (err) {
    console.log(`Mongodb error ${err}`);
    process.exit(1);
  }
};

module.exports = Mongodb;
