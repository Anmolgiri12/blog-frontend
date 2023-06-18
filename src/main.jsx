import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
// import {store} from './store/index'
import { Provider } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        {/* <App /> */}

        <h1>hustle coder </h1>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
