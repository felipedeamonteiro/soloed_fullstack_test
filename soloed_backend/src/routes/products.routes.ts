import { Router } from 'express';

import ProductsRepository from '../repositories/ProductsRepository';

import GetProductsService from '../services/GetProductsService';
import CreateProductsService from '../services/CreateProductsService';

const productsRouter = Router();

productsRouter.get('/', async (request, response) => {
  try {
    const productsRepository = new ProductsRepository();

    const getProducts = new GetProductsService(productsRepository);

    const products = await getProducts.execute();

    return response.json(products);
  } catch (err) {
    return response.status(401).json({ error: err.message });
  }
});

productsRouter.post('/', async (request, response) => {
  try {
    const { name, short_description, image, price } = request.body;

    const productsRepository = new ProductsRepository();

    const createProduct = new CreateProductsService(productsRepository);

    const product = await createProduct.execute({
      name,
      short_description,
      image,
      price,
    });

    return response.json(product);
  } catch (err) {
    return response.status(401).json({ error: err.message });
  }
});

export default productsRouter;
