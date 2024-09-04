import styles from "./button.module.css";

export default function Button({
  uniqueClassname,
  btnmessage,
  cart,
  addToCart,
  itemname,
  itemimage,
  cartitems,
  addToCartItems,
}) {
  function buttonclick() {
    // console.log(itemname);
    // console.log(itemimage);
    addToCart({ itemname: itemname, itemimage: itemimage });
    addToCartItems(cart);
  }
  console.log(cartitems.itemname);
  return (
    <>
      <button
        onClick={() => buttonclick()}
        className={`${styles.btn} ${uniqueClassname}`}
      >
        {btnmessage}
      </button>
    </>
  );
}
