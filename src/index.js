import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";

import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./redux/RootReducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
