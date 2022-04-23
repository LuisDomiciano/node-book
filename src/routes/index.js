import { Router } from "express";
import productsRoute from "./products"

const router = Router();

router.use("/products", productsRoute);

router.get("/", (request, response) => response.send("Hello World!"));

export default router;