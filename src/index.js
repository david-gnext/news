import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'material-design-icons/iconfont/material-icons.css'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,
 document.getElementById('root'));
registerServiceWorker();
