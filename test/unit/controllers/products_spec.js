import ProductsController from "../../../src/controllers/products";
import sinon from "sinon";
import { expect } from "chai";

describe("Controllers: Products", () => {
  const defaultProduct = [{
    name: "Default product",
    description: "product description",
    price: 100
  }];

  describe("get() products =", () => {
    it("should return a list products", () => {
      const request = {};
      const response = {
        send: sinon.spy()
      };

      const productsController = new ProductsController();
      productsController.get(request, response);

      expect(response.send.called).to.be.true;
      expect(response.send.calledWith(defaultProduct)).to.be.true;
    });
  });
});