import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.abouttxtcontainer}>
        <h1 className={styles.abouttitle1}> Our luxury stylist </h1>
        <p className={styles.aboutp}>
          specialize in creating bespoke pieces that blend timeless elegance
          <br />
          with modern sophistication. Their work is driven by a passion for
          craftsmanship <br /> and an eye for detail, ensuring that each design
          not only meets the highest <br /> standards of quality but also
          elevates the spaces it inhabits.
        </p>
        <button className={styles.aboutbtn}>Read More</button>
      </div>
      <div
        className={styles.aboutimgcontainer}
        style={{ backgroundImage: `url('./images/about.webp')` }}
      ></div>
    </div>
  );
}
