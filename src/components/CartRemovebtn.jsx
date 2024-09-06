import styles from "./button.module.css";

export default function CartRemovebtn() {
  return (
    <>
      <button className={`${styles.btn} ${styles.removecartbtn}`} type="button">
        Remove
      </button>
    </>
  );
}
