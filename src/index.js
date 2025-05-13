import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './i18n';
import { LikeProvider } from './context/LikeContext';
import { CartProvider } from './context/CartContext';
import { ComparisonProvider } from './context/Comparison';
import './firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ComparisonProvider>
  <CartProvider>
  <LikeProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </LikeProvider>
  </CartProvider>
  </ComparisonProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
