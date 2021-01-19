import React from 'react';

import { FaShoppingCart } from 'react-icons/fa';
import { Container } from './styles';
import Logo from '../../assets/logo_soloed.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <div className="logo-div">
        <img src={Logo} alt="Logo Soloed" />
      </div>

      <div className="cart-div">
        <button type="button">
          <FaShoppingCart size={20} />
          <strong>5</strong>
        </button>
      </div>
    </Container>
  );
};

export default Header;
