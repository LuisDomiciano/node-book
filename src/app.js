import express from "express";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/", routes);

export default app;