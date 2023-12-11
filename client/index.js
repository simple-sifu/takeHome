/**
 * The Initial React Setup file
 * ...
 *
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 *
 * == JS
 * All files in here start from this init point for the React Components.
 *
 *
 * Firstly we need to import the React JS Library
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App';


/**
 * We can start our initial App here in the main.js file
 */

// Render this out
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
