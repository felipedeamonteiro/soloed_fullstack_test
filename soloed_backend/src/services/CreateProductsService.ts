import Products from '../models/Products';
import IProductsRepository from '../repositories/ProductsRepository';

interface IRequest {
  name: string;
  short_description: string;
  image: string;
  price: number;
}

class CreateProductsService {
  constructor(private ProductsRepository: IProductsRepository) {}

  public async execute({
    name,
    short_description,
    image,
    price,
  }: IRequest): Promise<Products> {
    const product = await this.ProductsRepository.addProduct({
      name,
      short_description,
      image,
      price,
    });

    return product;
  }
}

export default CreateProductsService;
