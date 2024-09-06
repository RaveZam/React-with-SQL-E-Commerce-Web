import styles from "./itempage.module.css";
import Button from "../components/Button";
import Header from "../header/Header";

export default function Itempage({
  cart,
  addToCart,
  cartitems,
  addToCartItems,
  itemimage,
  itemname,
  itemprice,
}) {
  return (
    <>
      <Header cartitems={cartitems} cart={cart} itemprice={itemprice} />
      <div className={styles.itempage}>
        <div className={styles.imagecontainer}>
          <img className={styles.itemimage} src={itemimage} />
        </div>
        <div className={styles.descriptioncontainer}>
          <h1 className={styles.desctitle}>
            Black Festive Gifts for HOME AND KITCHEN
          </h1>
          <div className={styles.starrow}>
            <h3 className={styles.starcontent}>★★★★☆ </h3>
            <h2 className={styles.starcontent}> 1 Reviews </h2>
            <h2 className={styles.starcontent}>
              <a className={styles.starref} href="">
                Write A Review
              </a>
            </h2>
          </div>
          <div className={styles.productdetails}>
            <div className={styles.productdetailcolumn1}>
              <h2>Item Name:</h2>
              <h2>Product Code:</h2>
              <h2>Reward Points:</h2>
              <h2>Availability:</h2>
            </div>
            <div className={styles.productdetailcolumn2}>
              <h2> {itemname} </h2>
              <h2>Product 1</h2>
              <h2>400</h2>
              <h2>Out Of Stock</h2>
            </div>
          </div>
          <div className={styles.pricesection}>
            <h2>Price: ${itemprice}</h2>
            <h2>Tax: $2</h2>
            <h2>Price in reward Point: 20</h2>
            <Button
              uniqueClassname={styles.itempagebtn}
              btnmessage={"Add to cart"}
              cart={cart}
              addToCart={addToCart}
              itemname={itemname}
              itemimage={itemimage}
              cartitems={cartitems}
              addToCartItems={addToCartItems}
              itemprice={itemprice}
            />
          </div>
        </div>
      </div>
    </>
  );
}
