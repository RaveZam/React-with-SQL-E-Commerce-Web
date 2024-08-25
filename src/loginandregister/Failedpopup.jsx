import styles from "./failedpopup.module.css";

export default function Failedpopup({ loginSuccess }) {
  return (
    <div
      className={`${styles.failedpopupcontainer} ${
        loginSuccess ? "" : styles.failed
      }`}
    >
      <h1>Error Invalid Password Or Username</h1>
      <button className={styles.btn}>Ok</button>
    </div>
  );
}
