import React, { useState, useEffect, useCallback } from 'react';
import { connect, useDispatch } from 'react-redux';

import { FiShoppingBag } from 'react-icons/fi';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import { Container } from './styles';
import { addProductToCart } from '../../store/modules/cart/actions';

interface IProductsData {
  name: string;
  short_description: string;
  image: string;
  price: number;
  priceFormatted: string;
}

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<IProductsData[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map((product: IProductsData) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  const handleAddProduct = useCallback(
    (product: IProductsData) => {
      dispatch(addProductToCart(product));
    },
    [dispatch],
  );

  return (
    <Container>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <div className="content-div">
              <div className="image-div">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="middle-div">
                <div className="name-price-div">
                  <p>{product.name}</p>
                  <span>{product.priceFormatted}</span>
                </div>

                <p>{product.short_description}</p>
              </div>
            </div>

            <button type="button" onClick={() => handleAddProduct(product)}>
              <div>
                <FiShoppingBag size={16} color="#000" />
                <span>COMPRAR</span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default connect()(Home);
