import "./index.css";
import React from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import { Buffer } from "buffer";

window.Buffer = window.Buffer || Buffer;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
