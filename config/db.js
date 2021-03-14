const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const { DB_CONN, DB_USER, DB_PW } = process.env;

const connectDB = async () => {
  try {
    await mongoose.connect(
      DB_CONN,

      {
        auth: { user: DB_USER, password: DB_PW },
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }
    );

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
