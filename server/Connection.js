const mongoose = require('mongoose');


const getConnection = async (url) => {
  try {
    await mongoose.connect(url, {

    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Network error: ", error);
  }
};

module.exports = getConnection;
