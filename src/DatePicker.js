import React, { PureComponent } from 'react';

export default class DatePicker extends PureComponent {
  props: {
    value: string,
    onChange: (string) => void,
  };

  id = Math.random().toString(32)

  handleChange = e => {
    this.props.onChange(e.target.value);
  };

  render() {
    const { value } = this.props;
    return (
      <label className="date" htmlFor={this.id}>
        <input id={this.id} type="date" value={value} onChange={this.handleChange} />
        {value ? new Date(value).toLocaleDateString('he-IL', { day: 'numeric', month: 'long' }) : 'כל תאריך'}
      </label>
    );
  }
}
