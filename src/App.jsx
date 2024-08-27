import React, { useState } from "react";
import Login from "./loginandregister/Login";
import styles from "./app.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
