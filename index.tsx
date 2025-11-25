import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
// Import calendar script so Vite bundles it and asset paths respect `base`
import './calendar.js';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);