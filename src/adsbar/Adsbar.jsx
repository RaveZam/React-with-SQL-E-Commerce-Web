import styles from "./adsbar.module.css";

export default function Adsbar() {
  return (
    <div className={styles.adsbar}>
      <ul className={styles.adsbarul}>
        <li className={styles.adsbarli}>
          <img className={styles.icon} src="./images/rocket.png" alt="" />
          WorldWide Delivery
          <p className={styles.icondesc}>
            Ships worldwide with reliable and fast delivery, no matter where you
            are.
          </p>
        </li>
        <li className={styles.adsbarli}>
          <img className={styles.icon} src="./images/wallet.png" alt="" /> Great
          Savings
          <p className={styles.icondesc}>Save money effortlessly</p>
        </li>
        <li className={styles.adsbarli}>
          <img className={styles.icon} src="./images/box.png" alt="" /> Gift
          Vouchers
          <p className={styles.icondesc}>
            Gift vouchers—ideal for any occasion and perfect for every space
          </p>
        </li>
        <li className={styles.adsbarli}>
          <img className={styles.icon} src="./images/call.png" alt="" /> 24*7
          Support
          <p className={styles.icondesc}>
            Provide 24/7 Assistance to our valuable customers.
          </p>
        </li>
      </ul>
    </div>
  );
}
