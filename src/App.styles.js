import styled from 'styled-components';
import logo from './logo.svg';
import Card from './Card';

const ScrollView = styled.div`
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
`;

export const Container = styled.div`
  height: ${window.innerHeight}px;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
`;

export const Header = Card.withComponent('header').extend`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
`;

export const Logo = styled.div`
  width: 100%;
  height: 52px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${logo});
  margin: 30px auto 20px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  position: relative;
  padding-bottom: 6px;
`;

export const NavItem = styled.a`
  padding: 12px;
  flex: 1;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  opacity: ${({ selected }) => (selected ? 1 : 0.7)};
  cursor: pointer;
  user-select: none;

  &:active {
    background: rgba(0, 0, 0, 0.2);
  }
`;

export const NavIndicator = styled.div`
  width: ${props => 100 / props.total}%;
  height: 3px;
  background: ${({ theme }) => theme.colors.secondary};
  position: absolute;
  bottom: 0;
  right: 0;
  transition: transform 0.15s;
  transform: translateX(-${({ index }) => index * 100}%);
`;

export const Filters = styled(ScrollView)`
  background: white;
  color: black;
  display: flex;
  flex-direction: row;
`;

export const FilterItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 5px;

  label {
    white-space: nowrap;
  }

  label:not(.date) {
    padding: 0 20px;
  }

  select,
  label.date {
    border-top: 3.2px solid transparent;
    border-bottom: 2px solid #afafaf;
    transition: border 0.1s;

    &:focus {
      border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Shows = styled(ScrollView)`flex: 1;`;
