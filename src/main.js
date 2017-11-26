import React from 'react';
import ReactDOM from 'react-dom';

// main app
import App from './App';
import Counter from './Counter';
 
ReactDOM.render(<App />, document.getElementById('app'));
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('mount')
  );
});
console.log('Hello World!');