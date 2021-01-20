import { getRepository, Repository } from 'typeorm';
import IProductsRepository from './IProductsRepository';
import Products from '../models/Products';

interface IProductsDTO {
  name: string;
  short_description: string;
  image: string;
  price: number;
}

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Products>;

  constructor() {
    this.ormRepository = getRepository(Products);
  }

  public async addProduct({
    name,
    short_description,
    image,
    price,
  }: IProductsDTO): Promise<Products> {
    const product = this.ormRepository.create({
      name,
      short_description,
      image,
      price,
    });

    await this.ormRepository.save(product);

    return product;
  }

  public async getProducts(): Promise<Products[] | undefined> {
    const products = await this.ormRepository.find();

    return products;
  }
}

export default ProductsRepository;
