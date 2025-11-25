import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
// Import calendar script so Vite bundles it and asset paths respect `base`
// Import and invoke the calendar initializer so it starts polling for the
// container and jQuery. The module exports a default function that begins
// the startup polling when called.
import initCalendar from './calendar.js';

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

// Start the calendar module after initiating the app render. The module
// itself will wait until the #jquery-calendar element exists and jQuery is
// available before rendering.
initCalendar();