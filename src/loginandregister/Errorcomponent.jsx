import styles from "./login.module.css";

export default function Errorcomponent({ condition, className, message }) {
  return (
    <>
      <p className={`${styles.errormsg} ${condition ? className : ""}`}>
        {message}
      </p>
    </>
  );
}
