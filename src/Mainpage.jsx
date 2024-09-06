import Hero from "./hero/Hero";
import Adsbar from "./adsbar/Adsbar";
import Lampsection from "./lampsection/Lampsection";
import Login from "./loginandregister/Login";
import styles from "./app.module.css";
import About from "./aboutdesigner/About";
import Header from "./header/Header";
import Itempage from "./itempage/Itempage";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

export default function Mainpage({ cartitems, cart, itemprice }) {
  return (
    <div>
      <Header cartitems={cartitems} cart={cart} itemprice={itemprice} />
      <>
        <Hero />
        <About />
        <Adsbar />
        <Lampsection />
      </>
    </div>
  );
}
