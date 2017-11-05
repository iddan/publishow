import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as Analytics from './analytics';
import registerServiceWorker from './registerServiceWorker';
import noDoubleZoom from './noDoubleZoom';

const root = document.getElementById('root');

noDoubleZoom(root);

Analytics.track('pageview', {});

ReactDOM.render(<App />, root);

registerServiceWorker();
