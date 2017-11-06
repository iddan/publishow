import styled, { css, keyframes, injectGlobal } from 'styled-components';
import Card from '../Card';

const menuIn = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
  }
`;

const menuOut = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(100%);
  }
`;

// Menu's parent is a flex column
export const Container = Card.extend.attrs({ elevation: 5 })`
  padding: 8px;
  margin-top: auto;
  animation-name: ${menuIn};
`;

injectGlobal`
  .modal.exiting ${Container} {
    animation-name: ${menuOut};
  }
`;

export const Title = styled.h6`
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  opacity: 0.6;
`;

export const Buttons = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: row;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 12.5px;
  cursor: pointer;
`;

export const ButtonIcon = styled.button`
  width: 40px;
  height: 40px;
  user-select: none;
  background-image: url(${({ source }) => source});
  background-size: 100% auto;
  background-position: top;
  margin-bottom: 8px;
  background-color: transparent;
  border: none;
  outline: none;
`;

export const ButtonTitle = styled.label`
  font-size: 12px;
`;
