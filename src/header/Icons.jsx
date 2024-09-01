import styles from "./header.module.css";
export default function Icons({ setshowcart, showcart }) {
  function carticonclicked() {
    setshowcart(!showcart);
    console.log(showcart);
  }
  return (
    <>
      <div className={styles.icons}>
        <li>
          <img
            className={styles.icon}
            src="./images/search.png"
            width="24"
            height="24"
            alt="Icon"
          />
        </li>
        <li>
          <img
            className={styles.icon}
            src="./images/user.png"
            width="24"
            height="24"
            alt="Icon"
          />
        </li>
        <li onClick={() => carticonclicked()}>
          <img
            className={styles.icon}
            src="./images/cart.png"
            width="24"
            height="24"
            alt="Icon"
          />
        </li>
      </div>
    </>
  );
}
