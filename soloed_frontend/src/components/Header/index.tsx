import React, { useState, useCallback } from 'react';

import { AiFillCloseCircle } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { GrFormAdd } from 'react-icons/gr';
import { IoMdRemove } from 'react-icons/io';
import { Container } from './styles';
import Logo from '../../assets/logo_soloed.svg';
import AppleWatch from '../../assets/apple-watch.jpg';
import JBLSpeaker from '../../assets/JBL_speaker.jpg';

const Header: React.FC = () => {
  const [sidebar, setSidebar] = useState<boolean>(false);

  const handleCartBar = useCallback(() => {
    setSidebar(!sidebar);
  }, [sidebar]);

  return (
    <Container>
      <div className="nav-bar">
        <div className="logo-div">
          <img src={Logo} alt="Logo Soloed" />
        </div>

        <div className="cart-div">
          <button type="button" onClick={handleCartBar}>
            <FaShoppingCart size={20} />
            <strong>5</strong>
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
            <li>
              <img src={AppleWatch} alt="Apple Watch" />
              <p>Apple Watch Series 4 GPD</p>
              <div className="add-remove">
                <p>Qtd:</p>
                <div className="qtd-div">
                  <button type="button">
                    <IoMdRemove
                      size={11}
                      color="#000"
                      style={{ cursor: 'pointer' }}
                    />
                  </button>
                  <input type="number" readOnly value="3" />
                  <button type="button">
                    <GrFormAdd
                      size={11}
                      color="#000"
                      style={{ cursor: 'pointer' }}
                    />
                  </button>
                </div>
              </div>
              <strong>R$ 399,00</strong>
              <AiFillCloseCircle size={18} style={{ cursor: 'pointer' }} />
            </li>
            <li>
              <img src={JBLSpeaker} alt="JBL Speaker" />
              <p>JBL Speaker</p>
              <div className="add-remove">
                <p>Qtd:</p>
                <div className="qtd-div">
                  <button type="button">
                    <IoMdRemove
                      size={11}
                      color="#000"
                      style={{ cursor: 'pointer' }}
                    />
                  </button>
                  <input type="number" readOnly value="1" />
                  <button type="button">
                    <GrFormAdd
                      size={11}
                      color="#000"
                      style={{ cursor: 'pointer' }}
                    />
                  </button>
                </div>
              </div>
              <strong>R$ 299,00</strong>
              <AiFillCloseCircle size={18} style={{ cursor: 'pointer' }} />
            </li>
          </ul>
        </div>
        <div className="bottom-div">
          <div className="total-div">
            <h2>Total:</h2>
            <h2>R$ 798,00</h2>
          </div>
          <button type="button">Finalizar Compra</button>
        </div>
      </nav>
    </Container>
  );
};

export default Header;
