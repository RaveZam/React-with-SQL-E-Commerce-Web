import styles from "./hero.module.css";
import Header from "../header/Header";
export default function Hero() {
  return (
    <>
      <Header />
      <div className={styles.hero}>
        <div className={styles.txtcontainer}>
          <h2 className={styles.title1}>Century Modern Chair</h2>
          <h1>Decorate Home</h1>
          <h3>Shop Now</h3>
          <h1 className={styles.title4}>Tuxedo Mid Chair</h1>
        </div>
        <div className={styles.itemcontainer}>
          <img className={styles.item} src="./images/chair1.webp" />
        </div>
      </div>
    </>
  );
}
