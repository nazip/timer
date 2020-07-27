import React from 'react';
import ReactDOM from 'react-dom';
import App from './application';
require('application.css')

window.onload = () => {
  ReactDOM.render(<App/>, document.getElementById('root'))
}