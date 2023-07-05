import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Users from "./components/Users/Users";

export default function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/users" element={<Users />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
