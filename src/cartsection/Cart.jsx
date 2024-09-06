import { useState } from "react";
import styles from "./cart.module.css";
import Cartitem from "./Cartitem";

export default function Cart({ showcart, cartitems, cart }) {
  function logall() {
    console.log(cartitems);
  }
  return showcart ? (
    <div className={styles.cart}>
      <div className={styles.cartitems}>
        <h1 onClick={() => logall()} style={{ color: "white" }}>
          Show My Cart Items{" "}
        </h1>
        {cartitems.map((item) => (
          <Cartitem
            key={item.itemname}
            item={item}
            cart={cart}
            cartitems={cartitems}
          />
        ))}
      </div>
    </div>
  ) : (
    ""
  );
}
