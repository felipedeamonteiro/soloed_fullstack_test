import React, { useState, useCallback } from 'react';

import { AiFillCloseCircle } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { GrFormAdd } from 'react-icons/gr';
import { IoMdRemove } from 'react-icons/io';
import { useSelector, connect, useDispatch } from 'react-redux';

import { formatPrice } from '../../util/format';
import { Container } from './styles';
import Logo from '../../assets/logo_soloed.svg';
import { IState } from '../../store';
import { ICartItem } from '../../store/modules/cart/types';
import {
  RemoveProductFromCart,
  updateQuantity,
} from '../../store/modules/cart/actions';

const Header: React.FC = () => {
  const [sidebar, setSidebar] = useState<boolean>(false);
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items);
  const cartSize = useSelector<IState, number>(
    state => state.cart.items.length,
  );
  const dispatch = useDispatch();
  const total = useSelector<IState, string>(state =>
    formatPrice(
      state.cart.items.reduce((totalSum, product) => {
        return totalSum + product.product.price * product.quantity;
      }, 0),
    ),
  );

  const handleCartBar = useCallback(() => {
    setSidebar(!sidebar);
  }, [sidebar]);

  const handleRemoveProductFromCart = useCallback(
    (item: ICartItem) => {
      dispatch(RemoveProductFromCart(item.product));
    },
    [dispatch],
  );

  const handleRemoveProductItemFromCart = useCallback(
    (item: ICartItem) => {
      dispatch(updateQuantity(item, item.quantity - 1));
    },
    [dispatch],
  );

  const handleAddProductItemFromCart = useCallback(
    (item: ICartItem) => {
      dispatch(updateQuantity(item, item.quantity + 1));
    },
    [dispatch],
  );

  return (
    <Container>
      <div className="nav-bar">
        <div className="logo-div">
          <img src={Logo} alt="Logo Soloed" />
        </div>

        <div className="cart-div">
          <button type="button" onClick={handleCartBar}>
            <FaShoppingCart size={20} />
            <strong>{cartSize}</strong>
          </button>
        </div>
      </div>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <div className="top-div">
          <h2>Carrinho de compras</h2>
          <AiFillCloseCircle
            size={38}
            onClick={handleCartBar}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className="items-div">
          <ul className="nav-menu-items">
            {cart.map((item, index) => (
              <li key={index}>
                <img src={item.product.image} alt={item.product.name} />
                <p>{item.product.name}</p>
                <div className="add-remove">
                  <p>Qtd:</p>
                  <div className="qtd-div">
                    <button type="button">
                      <IoMdRemove
                        size={11}
                        color="#000"
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleRemoveProductItemFromCart(item)}
                      />
                    </button>
                    <input type="number" readOnly value={item.quantity} />
                    <button type="button">
                      <GrFormAdd
                        size={11}
                        color="#000"
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleAddProductItemFromCart(item)}
                      />
                    </button>
                  </div>
                </div>
                <strong>
                  {formatPrice(item.product.price * item.quantity)}
                </strong>
                <AiFillCloseCircle
                  size={18}
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleRemoveProductFromCart(item)}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="bottom-div">
          <div className="total-div">
            <h2>Total:</h2>
            <h2>{total}</h2>
          </div>
          <button type="button" onClick={() => window.location.reload()}>
            Finalizar Compra
          </button>
        </div>
      </nav>
    </Container>
  );
};

export default connect()(Header);
