import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditTodo from "./component/EditTodo";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<Routes>
      <Route path="/" element={<App />} />
			<Route path="todo/:todoID" element={<EditTodo />} />
		</Routes>
	</BrowserRouter>
);
