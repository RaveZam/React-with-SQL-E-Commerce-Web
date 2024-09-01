import styles from "./header.module.css";
import Icons from "./Icons";
import Itemlist from "./Itemlist";
import Logo from "./Logo";
import Cart from "../cartsection/Cart";
import { useState } from "react";
export default function Header() {
  const [showcart, setshowcart] = useState(false);
  return (
    <>
      <div id="Header" className={styles.header}>
        <Logo />
        <Itemlist />
        <Icons setshowcart={setshowcart} showcart={showcart} />
        <Cart showcart={showcart} />
      </div>
    </>
  );
}
