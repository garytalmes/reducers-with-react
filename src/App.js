import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LoginReducerPage from "./pages/LoginReducerPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/alt" element={<LoginReducerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
