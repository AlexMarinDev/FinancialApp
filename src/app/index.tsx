import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./theme/fonts/index.css"
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApiProvider } from "../api";
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <ApiProvider
      url="https://jean-test-api.herokuapp.com/"
      token="c902808d-470f-4c66-ab9d-a70dd3bf1039" // set your api token here
    >
      <App />
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
