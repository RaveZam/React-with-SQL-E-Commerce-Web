import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.abouttxtcontainer}>
        <h1> Our Luxury Stylist </h1>
        <p>
          specialize in creating bespoke pieces that blend timeless elegance
          with modern sophistication. Their work is driven by a passion for
          craftsmanship and an eye for detail, ensuring that each design not
          only meets the highest standards of quality but also elevates the
          spaces it inhabits.
        </p>
        <button className={styles.aboutbtn}>Read More</button>
      </div>
      <div className={styles.aboutimgcontainer}></div>
    </div>
  );
}
