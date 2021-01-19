import styled from 'styled-components';

export const Container = styled.header`
  background: #ffff00;
  height: 100px;
  width: 100%;
  top: 0;

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
`;
