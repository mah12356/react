import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/header.css'
import './css/boot.css'
import App from './App';
import './BYekan/font.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store } from './redux/Store';

const root = ReactDOM.createRoot(document.body);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
reportWebVitals();
