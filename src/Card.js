import styled, { css } from 'styled-components';

const Card = styled.div`
  background: white;
  ${({ elevation = 1 }) => {
    switch (elevation) {
      case 1:
        return css`
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        `;
      case 2:
        return css`
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        `;
      case 3:
        return css`
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        `;
      case 4:
        return css`
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
        `;
      case 5:
        return css`
          box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
        `;
      default:
        return ';';
    }
  }};
`;

export default Card;
