import React from 'react';
import ReactDOM from 'react-dom';

// main app
import App from './App';
import Counter from './Counter';
import { Provider } from 'react-redux';
import store from '../store';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('mount')
  );
});
console.log('Hello World!');

ReactDOM.render(<Provider store={store}>  <AppRoutes /> </Provider>, document.getElementById('app'));

