import React from "react";
import ReactDOM from "react-dom/client";
import"./index.css"
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import County from "./Numbercount/County";
import Homee from "./Home/home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Luckydraw } from "./lucky/Lotorylucky";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homee />} />
      <Route path="/app" element={<App />} />
      <Route path="/counter" element={<County />}></Route>
      <Route path="/counter2" element={<County />}></Route>
      <Route path="/lotory" element={<Luckydraw />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
