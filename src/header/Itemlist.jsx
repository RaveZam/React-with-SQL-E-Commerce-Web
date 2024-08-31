import styles from "./header.module.css";
export default function Itemlist() {
  return (
    <div className={styles.itemlist}>
      <ul>
        <li> Chairs </li>
        <li> Tables </li>
        <li> Beds </li>
        <li> Chairs </li>
        <li> Lamps </li>
      </ul>
    </div>
  );
}
