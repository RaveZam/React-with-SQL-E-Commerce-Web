import React, { useState } from "react";
import Login from "./loginandregister/Login";
import styles from "./app.module.css";
import About from "./aboutdesigner/About";
import Itempage from "./itempage/Itempage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Hero from "./hero/Hero";
import Adsbar from "./adsbar/Adsbar";
import Lampsection from "./lampsection/Lampsection";

function App() {
  const [cart, addToCart] = useState({ itemname: "", itemimage: "" });
  const [cartitems, addToCartItems] = useState([]);
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/Hero" element={<Hero />} />
        </Routes>
      </BrowserRouter> */}

      {/* <Hero />
      <About />
      <Adsbar />
      <Lampsection /> */}
      <Itempage
        cartitems={cartitems}
        addToCartItems={addToCartItems}
        cart={cart}
        addToCart={addToCart}
      />
    </>
  );
}

export default App;
