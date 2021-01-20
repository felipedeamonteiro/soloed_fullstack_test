import Products from '../models/Products';
import IProductsRepository from '../repositories/ProductsRepository';

class GetProductsService {
  constructor(private ProductsRepository: IProductsRepository) {}

  public async execute(): Promise<Products[] | undefined> {
    const products = await this.ProductsRepository.getProducts();

    return products;
  }
}

export default GetProductsService;
