import styles from "./lampsection.module.css";
import Button from "../components/Button";
import { Navigate, useNavigate } from "react-router-dom";
export default function Lampsection() {
  const navigate = useNavigate();

  function goToitempage() {
    navigate("/itempage");
  }
  return (
    <div className={styles.lampsection}>
      <img className={styles.lampimg} src="/images/lamp1.webp" alt="" />
      <div className={styles.lampsectiontxtcontainer}>
        <h1 className={styles.lamptitle}>LIGHT HOUSE</h1>
        <p className={styles.lampp}>
          Illuminate your space with our modern lamps, <br /> blending sleek
          design with functionality.
        </p>
        <button onClick={() => goToitempage()} className={styles.lampbtn}>
          Buy Now
        </button>
      </div>
      <img className={styles.lampimg2} src="/images/lamp2.webp" alt="" />
    </div>
  );
}
