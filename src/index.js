import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import noDoubleZoom from './noDoubleZoom'

const root = document.getElementById('root')

noDoubleZoom(root)

ReactDOM.render(<App />, root);
registerServiceWorker();
