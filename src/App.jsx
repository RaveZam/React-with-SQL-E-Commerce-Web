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
import Mainpage from "./Mainpage";

function App() {
  const [cartitems, addToCartItems] = useState([]);
  let itemname = "Silver effect Cone Light shade (D) 190mm";
  let itemimage = "./images/lamp1.webp";
  const itemprice = 6;
  const [cart, addToCart] = useState({
    itemname: "",
    itemimage: "",
    itemprice: 0,
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route
            path="/Mainpage"
            element={
              <Mainpage
                cartitems={cartitems}
                cart={cart}
                itemprice={itemprice}
              />
            }
          />
          <Route
            path="/Itempage"
            element={
              <Itempage
                cartitems={cartitems}
                addToCartItems={addToCartItems}
                cart={cart}
                addToCart={addToCart}
                itemimage={itemimage}
                itemname={itemname}
                itemprice={itemprice}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      {/* <Hero />
      <About />
      <Adsbar />
      <Lampsection /> */}
      {/* <Itempage
        cartitems={cartitems}
        addToCartItems={addToCartItems}
        cart={cart}
        addToCart={addToCart}
      /> */}
    </>
  );
}

export default App;
