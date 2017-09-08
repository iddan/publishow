import React, { Children, ReactElement } from 'react';
import { Nav as StyledNav, NavIndicator } from './App.styles';

const Nav = ({
  selected,
  children,
  onSelect,
}: {
  selected: string,
  onSelect: string => void,
  children: Array<ReactElement>,
}) => {
  const childArray = Children.toArray(children);
  return (
    <StyledNav>
      {Children.map(children, (child, index) =>
        React.cloneElement(child, {
          index,
          onSelect,
          selected: child.props.name === selected,
        }),
      )}
      <NavIndicator total={childArray.length} index={childArray.findIndex(child => child.props.name === selected)} />
    </StyledNav>
  );
};

export default Nav;
