import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {router} from "./router";
import {RouterProvider} from "react-router-dom";
import i18n from './i18n';
import {I18nextProvider} from "react-i18next";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <I18nextProvider i18n={i18n}>
          <RouterProvider router={router} />
      </I18nextProvider>
  </React.StrictMode>
);

reportWebVitals();
