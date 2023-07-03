import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//router
import { BrowserRouter as Router } from "react-router-dom";
//redux
import { Provider } from "react-redux";
import store from './redux/store';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
