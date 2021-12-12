import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Route, Routes } from "react-router";
import "antd/dist/antd.css";
import Player from "./pages/player";



ReactDOM.render(
	<BrowserRouter>
		<Routes>
        <Route path="/" element={<App />} />
        <Route path="/player" element={<Player />} />
      </Routes>
	</BrowserRouter>,

	document.getElementById("root")
);

reportWebVitals();
