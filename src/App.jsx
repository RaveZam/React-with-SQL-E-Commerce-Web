import React, { useState } from "react";
import Login from "./loginandregister/Login";
import styles from "./app.module.css";
import About from "./aboutdesigner/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Hero from "./hero/Hero";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/Hero" element={<Hero />} />
        </Routes>
      </BrowserRouter> */}
      <Hero />
      <About />
    </>
  );
}

export default App;
