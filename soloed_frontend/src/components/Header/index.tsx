import React, { useState, useCallback } from 'react';

import { AiFillCloseCircle } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { Container } from './styles';
import Logo from '../../assets/logo_soloed.svg';

const Header: React.FC = () => {
  const [sidebar, setSidebar] = useState<boolean>(false);

  const handleOpenMenu = useCallback(() => {
    console.log('Abrindo o menu de carrinho');
    setSidebar(true);
  }, []);

  const handleCloseMenu = useCallback(() => {
    console.log('Fechando o menu de carrinho');
    setSidebar(false);
  }, []);

  return (
    <Container>
      <div className="nav-bar">
        <div className="logo-div">
          <img src={Logo} alt="Logo Soloed" />
        </div>

        <div className="cart-div">
          <button type="button" onClick={handleOpenMenu}>
            <FaShoppingCart size={20} />
            <strong>5</strong>
          </button>
        </div>
      </div>

      <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <button type="button" onClick={handleCloseMenu}>
              <AiFillCloseCircle size={20} />
            </button>
          </li>
          <li>
            <div className="cart-items">Item do Carrinho 1</div>
          </li>
          <li>
            <div className="cart-items">Item do Carrinho 2</div>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
