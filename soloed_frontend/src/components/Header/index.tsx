import React from 'react';

import { Container } from './styles';
import Logo from '../../assets/logo_soloed.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <div className="logo-div">
        <img src={Logo} alt="Logo Soloed" />
      </div>

      <div className="cart-div">
        <button type="button">Carrinho</button>
      </div>
    </Container>
  );
};

export default Header;
