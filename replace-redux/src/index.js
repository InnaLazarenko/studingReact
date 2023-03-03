import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products-context";
import configureProductsStore from "./hooks-store/products-store";
import configureCounterStore from "./hooks-store/counter-store";

//Context provider good for not frequently updated states. Auth, theme for  example

configureProductsStore();
configureCounterStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsProvider>
);
