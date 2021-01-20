export interface IProduct {
  name: string;
  short_description: string;
  image: string;
  price: number;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
}
