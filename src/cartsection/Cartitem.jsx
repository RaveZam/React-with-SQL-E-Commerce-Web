import CartRemovebtn from "../components/CartRemovebtn";
import styles from "./cart.module.css";

export default function Cartitem({ cartitem, cart, item }) {
  return (
    <div className={styles.headercartitem}>
      <img className={styles.cartitemimage} src={cart.itemimage} alt="" />
      <div className={styles.itemwrap}>
        <h1>{cart.itemname}</h1>
        <h1>{cart.itemprice}</h1>
      </div>
      <CartRemovebtn />
    </div>
  );
}
