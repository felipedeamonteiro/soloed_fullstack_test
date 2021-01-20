import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    list-style: none;

    li {
      box-shadow: 10px 2px 8px rgba(0, 0, 0, 0.135216);
      display: flex;
      flex-direction: column;
      background: #fff;
      border-radius: 8px;
      width: 245px;
      height: 340px;
      padding-top: 20px;

      .content-div {
        padding: 0 20px;

        .image-div {
          margin-bottom: 14px;
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: 100%;
            height: 100%;
            object-fit: scale-down;
            align-self: center;
            max-width: 250px;
          }
        }

        .middle-div {
          display: flex;
          flex-direction: column;

          .name-price-div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: row;

            p {
              font-size: 16px;
              line-height: 19px;
              font-weight: 400;
              color: #2c2c2c;
              margin-right: 4px;
            }

            span {
              background: #373737;
              padding: 5px;
              border-radius: 5px;
              font-size: 15px;
              font-weight: bold;
              color: #ffff00;
            }
          }

          p {
            margin-top: 8px;
            font-size: 10px;
            color: #2c2c2c;
            line-height: 12px;
          }
        }
      }

      button {
        background: #ffff00;
        color: #000;
        border: 0;
        border-radius: 0 0 8px 8px;
        overflow: hidden;
        margin-top: auto;

        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.03, '#ffff00')};
        }

        div {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px;

          svg {
            margin-right: 5px;
          }
        }

        span {
          flex: 1;
          text-align: center;
          font-weight: bold;
        }
      }
    }
  }
`;
