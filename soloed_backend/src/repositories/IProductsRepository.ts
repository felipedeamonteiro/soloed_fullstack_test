import Products from '../models/Products';

interface IProductsDTO {
  name: string;
  short_description: string;
  image: string;
  price: number;
}

export default interface IProductsRepository {
  getProducts(): Promise<Products[] | undefined>;
  addProduct({
    name,
    short_description,
    image,
    price,
  }: IProductsDTO): Promise<Products>;
}
