import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./sass/style.scss";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat/*" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}
