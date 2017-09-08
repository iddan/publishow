import React, { Component } from 'react';
import shallowEqual from 'shallowequal';
import Select from './Select';
import DatePicker from './DatePicker';
import { FilterItemContainer } from './App.styles';

const FilterInputComponents = {
  select: Select,
  date: DatePicker,
};

export default class FilterItem extends Component {
  props: {
    onChange: (string, string) => void,
  };

  shouldComponentUpdate(nextProps) {
    const { options, ...restProps } = this.props;
    const { options: nextOptions, ...nextRestProps } = nextProps;
    return !shallowEqual(restProps, nextRestProps);
  }

  handleChange = value => {
    this.props.onChange(value, this.props.name);
  };

  render() {
    const { label, type, ...rest } = this.props;
    const InputComponent = FilterInputComponents[type];
    return (
      <FilterItemContainer>
        <label>{label}</label>
        <InputComponent {...rest} onChange={this.handleChange} />
      </FilterItemContainer>
    );
  }
}
