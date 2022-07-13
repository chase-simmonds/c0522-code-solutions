import React from 'react';
import ReactDOM from 'react-dom/client';

const reactHeader = React.createElement('h1', null, 'Hello, React!');

console.log(reactHeader);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(reactHeader);
