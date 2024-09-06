import styles from "./hero.module.css";
import Header from "../header/Header";
import About from "../aboutdesigner/About";
export default function Hero() {
  // navigate("/Hero");
  return (
    <>
      {/* <Header /> */}
      <div className={styles.hero}>
        <div className={styles.txtcontainer}>
          <h2 className={styles.title1}>Century Modern Chair</h2>
          <h1 className={styles.title2}>Decorate</h1>
          <div className={styles.wrap}>
            <h1 className={styles.title3}>Home</h1>
            <h3 className={styles.title35}>
              <a className={styles.title35} href="">
                Shop Now
              </a>
            </h3>
          </div>
          <h1 className={styles.title4}>Tuxedo Mid Chair</h1>
        </div>
        <div className={styles.itemcontainer}>
          <img className={styles.item} src="./images/chair1.webp" />
        </div>
      </div>
    </>
  );
}
