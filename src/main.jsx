import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import AdminPage from "./pages/AdminPage";
import Login from "./components/Admin/Login";
import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <Routes>
                {/* Existing routes */}
                <Route path="/" element={<App />} />

                {/* Admin panel routes */}
                <Route path="/site/admin" element={<AdminPage />} />
                <Route path="/site/admin/login" element={<Login />} />

                {/* Add more routes here if needed */}
            </Routes>
        </Router>
    </React.StrictMode>
);