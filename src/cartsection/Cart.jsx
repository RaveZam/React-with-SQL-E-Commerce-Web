import { useState } from "react";
import styles from "./cart.module.css";

export default function Cart({ showcart }) {
  return showcart ? (
    <div className={styles.cart}>
      <div className={styles.cartitems}>
        <h1 className={styles.cartitemtitle}>Your Cart Is Empty</h1>
      </div>
    </div>
  ) : (
    ""
  );
}
