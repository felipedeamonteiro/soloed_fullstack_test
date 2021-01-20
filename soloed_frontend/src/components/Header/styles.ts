import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  width: 100%;
  top: 0;

  .nav-bar {
    background: #ffff00;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    .logo-div {
      margin-left: 67px;
    }

    .cart-div {
      margin-right: 88px;

      button {
        width: 90px;
        height: 45px;
        border-radius: 8px;
        background: #000000;
        border: 0;

        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;

        svg {
          color: #ffff00;
          margin-left: 15px;
        }

        strong {
          margin-left: 16px;
          color: #ffff00;
        }
      }
    }
  }

  .nav-menu {
    background-color: #ffff00;
    width: 486px;
    height: 100vh;
    display: flex;
    display: flex;
    position: fixed;
    /* right: -300px; */
    right: 0;
    transition: 850ms;
  }

  .nav-menu-active {
    right: 0;
    transition: 350ms;
  }
`;
