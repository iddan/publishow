import React from 'react';
import ReactDOM from 'react-dom';
import * as Modal from './modal';
import Menu from './Menu';

export const share = text => {
  const { element, destroy } = Modal.create();
  ReactDOM.render(<Menu onSelect={destroy} link={text} />, element);
};
