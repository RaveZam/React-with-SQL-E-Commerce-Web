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
  itemprice,
}) {
  function buttonclick(e) {
    addToCart({
      itemname: itemname,
      itemimage: itemimage,
      itemprice: itemprice,
    });
    addToCartItems([...cartitems, cart]);
  }

  return (
    <>
      <button
        onClick={(e) => buttonclick(e)}
        className={`${styles.btn} ${uniqueClassname}`}
      >
        {btnmessage}
      </button>
    </>
  );
}
