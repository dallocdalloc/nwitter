import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import firebase from './firebase';

console.log(firebase);

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
