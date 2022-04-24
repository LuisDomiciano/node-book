import mongoose from "mongoose";

const mongodbUrl = process.env.MONGODB_URL || "mongodb://localhost/test";

const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const connect = () => mongoose.connect(mongodbUrl, config);
const close = () => mongoose.connection.close();

export default {
  connect,
  close,
  connection: mongoose.connection
}