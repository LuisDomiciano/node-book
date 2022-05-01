import mongoose from "mongoose";
import "dotenv/config";

const mongodbUrl = process.env.DB_URI;

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