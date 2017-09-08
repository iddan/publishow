import React, { Component } from 'react';
import { NavItem as StyledNavItem } from './App.styles';

export default class NavItem extends Component {
  handleClick = () => {
    this.props.onSelect(this.props.name);
  };

  render() {
    const { title, selected } = this.props;
    return (
      <StyledNavItem selected={selected} onClick={this.handleClick}>
        {title}
      </StyledNavItem>
    );
  }
}
