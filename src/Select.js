import React, { PureComponent } from 'react';

export default class Select extends PureComponent {
  props: {
    onChange: string => void,
    value: string,
    options: Array<{
      value: string,
      label: string,
    }>,
  };

  handleSelect = e => {
    this.props.onChange(e.target.selected);
  };

  render() {
    const { value, options, ...rest } = this.props;
    return (
      <select
        {...rest}
        onSelect={this.handleSelect}
        selected={value}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
}
