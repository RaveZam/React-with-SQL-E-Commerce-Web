import styles from "./header.module.css";
import Icons from "./Icons";
import Itemlist from "./Itemlist";
import Logo from "./Logo";
export default function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <Itemlist />
      <Icons />
    </div>
  );
}
