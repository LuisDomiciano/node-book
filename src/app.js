import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (request, response) => response.send("Hello World!"));

export default app;