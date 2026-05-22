require('dotenv').config();
const mongoose = require('mongoose');

const ConnectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB successfully");
  } catch (error) {
    console.error("Error while connecting to DB", error);
  }
}

module.exports = ConnectToDB;