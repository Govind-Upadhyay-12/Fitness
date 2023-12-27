import React from "react";
import { createRoot } from "react-dom"; // Corrected import statement
import "./index.css";
import App from "./App";
// import store from './components/redux/store.js'
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {persistor,store} from './components/redux/store.js'
// import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'


const root = createRoot(document.getElementById("root")); // Used createRoot to create a concurrent root

root.render(
   <BrowserRouter>
   
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
      
      <App />
      
      </PersistGate>
   </Provider>
   
   </BrowserRouter>
);
