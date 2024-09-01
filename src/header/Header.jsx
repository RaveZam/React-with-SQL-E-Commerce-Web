import styles from "./header.module.css";
import Icons from "./Icons";
import Itemlist from "./Itemlist";
import Logo from "./Logo";
import Cart from "../cartsection/Cart";
export default function Header() {
  return (
    <>
      <div id="Header" className={styles.header}>
        <Logo />
        <Itemlist />
        <Icons />
        <Cart />
      </div>
    </>
  );
}
