import { useNavigate } from "react-router-dom";
import styles from "./header.module.css";

export default function Logo() {
  const navigate = useNavigate();

  return (
    <>
      <h1 onClick={() => navigate("/Mainpage")} className={styles.logo}>
        URBAN SPACE
      </h1>
    </>
  );
}
