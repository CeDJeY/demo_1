import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MaterialUIControllerProvider } from './mdb/context';
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MaterialUIControllerProvider>
        <App />
      </MaterialUIControllerProvider>
    </BrowserRouter>
  </React.StrictMode>
);
