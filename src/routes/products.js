import { Router } from "express";

const router = Router();

router.get("/", (request, response) => response.send([{
  name: "Default product",
  description: "product description",
  price: 100
}]));

export default router;
