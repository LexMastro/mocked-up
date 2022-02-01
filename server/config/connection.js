const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL || "mongodb://localhost/mockup", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
