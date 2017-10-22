import styled from 'styled-components';
import Card from './Card';

export const Container = Card.withComponent('article').extend.attrs({ elevation: 1 })`
  width: calc(100% - 32px);
  max-width: 400px;
  padding: 8px;
  background: white;
  margin: 8px auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.div`
  height: 140px;
  background-size: cover;
  background-position: center;
  background-color: #eee;
`;

export const Content = styled.div`
  padding: 18px;
  display: flex;
  flex-direction: row;
`;

export const Details = styled.div`
  flex: 1;

  h3 {
    font-size: 1rem;
  }
`;

export const Aside = styled.div`
  padding: 8px 12.5px 0;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  flex: 0;
`;

export const StyledDate = styled.div`font-size: 2.25rem;`;

export const Month = styled.div`
  color: var(--grey-600);
  font-size: 0.9em;
`;

export const Time = styled.time`
  color: var(--grey-700);
  font-weight: 600;
  margin-top: 25px;
`;

export const Tags = styled.div`margin-top: 24px;`;

export const Tag = styled.span`
  padding: 4px 9px;
  font-size: 13px;
  background: var(--grey-200);
  color: var(--grey-600);
  margin: 8px 0 0 8px;
`;

export const Entrance = styled.p`
  display: flex;
  justify-content: flex-end;
  font-size: 0.8rem;
  font-style: italic;
  margin: 0;
  padding: 0 12px 18px;
`;

export const Footer = styled.div`
  padding: 0 16px 16px;
  flex-direction: row-reverse;
  display: flex;
`;

export const Button = styled.button`
  padding: 4px 8px;
  cursor: pointer;
  user-select: none;
  font: inherit;
  background: none;
  border: none;
  outline: none;

  [type='flat'] {
    color: var(--indigo-500);
    background: transparent;
    font-weight: 600;
  }

  [type='flat']:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  [type='flat']:active {
    background: rgba(0, 0, 0, 0.2);
  }
`;
