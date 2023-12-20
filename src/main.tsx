import i18n from 'i18next';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { initReactI18next } from 'react-i18next';

import { locales } from './locales/locales.ts';
import { App } from './pages/App.tsx';
import './styles/index.css';

i18n.use(initReactI18next).init({
  resources: locales,
  lng: 'zh',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
