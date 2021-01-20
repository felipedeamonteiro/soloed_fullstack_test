import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  width: 100%;
  top: 0;

  .nav-bar {
    background: #ffff00;
    height: 100px;

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
    justify-content: space-between;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: -100%;
    transition: 850ms;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

    .top-div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      margin-top: 36px;

      h2 {
        margin-left: 47px;
        max-width: 180px;
      }

      svg {
        margin-right: 22px;
      }
    }

    .items-div {
      margin-top: 10px;
      height: 60%;
      display: flex;
      justify-content: center;
      align-items: flex-start;

      li {
        list-style: none;
        background: #fff;
        box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        width: 380px;
        height: 95px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;

        & + li {
          margin-top: 28px;
        }

        img {
          height: 60px;
        }

        p {
          width: 113px;
          font-size: 13px;
        }

        .add-remove {
          display: flex;
          flex-direction: column;

          p {
            font-size: 9px;
          }

          .qtd-div {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 66px;
            border: 1px solid #ddd;
            border-radius: 4px;

            input {
              padding-left: 12px;
              border: 0;
              color: #666;
              width: 35px;
              font-size: 11px;
            }

            button {
              border: 0;
              border-right: 1px solid #ddd;
              background: none;
            }

            input + button {
              border-left: 1px solid #ddd;
              border-right: 0;
            }
          }
        }

        strong {
          font-size: 14px;
        }

        strong + svg {
          margin: 0 0 87px -18px;
        }
      }
    }

    .bottom-div {
      .total-div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 42px;

        > h2 {
          margin-left: 47px;

          & + h2 {
            margin-right: 47px;
          }
        }
      }

      button {
        width: 100%;
        height: 100px;
        background-color: #000000;
        color: #ffff00;
        text-align: center;
        border: 0;
        font-size: 28px;
        font-weight: 700;
      }
    }
  }

  .nav-menu.active {
    right: 0;
    transition: 350ms;
  }
`;
