import axios from "axios";
import { useState } from "react";
import styles from "./login.module.css";

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function handleClick(e) {
    e.preventDefault();
    console.log("pushed");
    const url = "http://localhost/reactdatabase/index.php";
    let fData = new FormData();
    fData.append("username", username);
    fData.append("password", password);
    axios
      .post(url, fData)
      .then((response) => alert(response.data))
      .catch((error) => alert(error));
  }
  return (
    <>
      <div
        style={{ backgroundImage: `url('./images/img6.webp')` }}
        className={styles.loginregistercontainer}
      >
        <div className={styles.formcontainer}>
          <form className={styles.form} action="">
            <h1 className={styles.title1}>Welcome To</h1>
            <h1 className={styles.title2}>Urban Space</h1>
            <label className={styles.label} htmlFor="">
              Username
            </label>
            <input
              className={styles.input}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              value={username}
            />
            <label className={styles.label} htmlFor="">
              Password
            </label>
            <input
              className={styles.input}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              value={password}
            />
            <button
              className={styles.loginbtn}
              onClick={(e) => handleClick(e)}
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
