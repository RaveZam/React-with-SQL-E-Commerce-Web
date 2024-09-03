import styles from "./itempage.module.css";
import Header from "../header/Header";
import Button from "../components/Button";

export default function Itempage() {
  return (
    <>
      <Header />
      <div className={styles.itempage}>
        <div className={styles.imagecontainer}>
          <img className={styles.itemimage} src="" />
        </div>
        <div className={styles.descriptioncontainer}>
          <h1>Black Festive Gifts for HOME AND KITCHEN</h1>
          <div className={styles.starrow}>
            <h3>★★★★☆ </h3>
            <h2> 1 Reviews </h2>
            <h2>
              <a href="">Write A Review</a>
            </h2>
          </div>
          <div className={styles.productdetails}>
            <div className={styles.productdetailcolumn1}>
              <h2>Brand:</h2>
              <h2>Product Code:</h2>
              <h2>Reward Points:</h2>
              <h2>Availability:</h2>
            </div>
            <div className={styles.productdetailcolumn2}>
              <h2>JBL </h2>
              <h2>Product 1</h2>
              <h2>400</h2>
              <h2>Out Of Stock</h2>
            </div>
          </div>
          <div className={styles.pricesection}>
            <h2>$3,600,002.00</h2>
            <h2>Ex Tax: $3,600,002.00</h2>
            <h2>Price in reward Point</h2>
            <Button />
          </div>
        </div>
      </div>
    </>
  );
}
