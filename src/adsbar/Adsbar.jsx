import styles from "./adsbar.module.css";

export default function Adsbar() {
  return (
    <div className={styles.adsbar}>
      <ul className={styles.adsbarul}>
        <li className={styles.adsbarli}>WorldWide Delivery</li>
        <li className={styles.adsbarli}>Great Savings</li>
        <li className={styles.adsbarli}>Gift Vouchers</li>
        <li className={styles.adsbarli}>24*7 Support</li>
      </ul>
    </div>
  );
}
