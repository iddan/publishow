import styled, { keyframes } from 'styled-components';
import { transparentize } from 'polished';

/**
 * source: https://codepen.io/holdencreative/pen/vEVbwv
 */

const indeterminate = keyframes`
0% {
  left: -35%;
  right: 100%;
}
60% {
  left: 100%;
  right: -90%;
}
100% {
  left: 100%;
  right: -90%;
}
`;

const indeterminateShort = keyframes`
0% {
  left: -200%;
  right: 100%;
}
60% {
  left: 107%;
  right: -8%;
}
100% {
  left: 107%;
  right: -8%;
}
`;

export const Progress = styled.div`
  position: relative;
  height: 4px;
  display: ${({ loading }) => (loading ? 'block' : 'none')};
  width: 100%;
  background-color: ${({ theme }) => transparentize(0.8, theme.colors.primary)};
  border-radius: 2px;
  background-clip: padding-box;
  overflow: hidden;
`;

export const Indeterminate = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};

  &:before {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    animation: ${indeterminate} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
  }

  &:after {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    animation: ${indeterminateShort} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
  }
`;
