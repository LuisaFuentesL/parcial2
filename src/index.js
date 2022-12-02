import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/header';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import {IntlProvider} from 'react-intl';
import {createRoot} from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bands from "./components/bands"
import Detail from "./components/detail";

const root = ReactDOM.createRoot(document.getElementById("root"));

if (window.navigator.language === 'es-ES') {
  root.render(
      
      <IntlProvider locale="es-ES" messages= {localeEsMessages}>
    <BrowserRouter>
    <Header/>
       <Routes>
         <Route path="/" element={<Bands />} />
         <Route path="/bands" element={<Bands />} />
         <Route path="/bands/:bandId" element={<Detail />} />

       </Routes>
     </BrowserRouter>
    </IntlProvider>, document.getElementById("root")
    );}
else{
    root.render(
        
        <IntlProvider locale="en-US" messages= {localeEnMessages}>
        <BrowserRouter>
        <Header/>

       <Routes>
         <Route path="/" element={<Bands />} />
         <Route path="/bands" element={<Bands />} />
         <Route path="/bands/:bandId" element={<Detail />} />

       </Routes>
     </BrowserRouter>
        </IntlProvider>, document.getElementById("root")
    );  
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
