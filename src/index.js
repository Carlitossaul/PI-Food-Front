import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import { Toaster } from "react-hot-toast";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster
        position="bottom-right"
        toastOptions={{
          success: {
            style: {},
          },
          error: {
            style: {},
          },
          style: {},
        }}
      />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
