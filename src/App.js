
import './App.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "primereact/resources/themes/lara-light-cyan/theme.css";

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useRef } from 'react';
import Router from './Routes';
import { Sidebar } from './Component/Sidebar/Sidebar';
import { PrimeReactProvider } from 'primereact/api';

function App({...pageProps}) {
  return (
    

    <PrimeReactProvider>
    <BrowserRouter>
      <Router {...pageProps} />
    </BrowserRouter>
    </PrimeReactProvider>

  
  );
}

export default App;
