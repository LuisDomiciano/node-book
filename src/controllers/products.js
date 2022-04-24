class ProductsController {

  get(request, response) {
    return response.send([{
      name: "Default product",
      description: "product description",
      price: 100
    }])
  }
}

export default ProductsController;