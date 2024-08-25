import axios from "axios";
import { useState } from "react";
import styles from "./login.module.css";
import Failedpopup from "./Failedpopup";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registering, isRegistering] = useState(false);
  const [loginbtn, pressloginbtn] = useState(false);
  const [registerbtn, pressregisterbtn] = useState(false);
  const [loginSuccess, setloginSuccess] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    const url = "http://localhost/reactdatabase/index.php";
    let fData = new FormData();
    fData.append("username", username);
    fData.append("password", password);
    fData.append("loginbtn", loginbtn);
    axios
      .post(url, fData)
      .then((responce) => console.log(responce))
      .catch((error) => console.log(error));
    console.log(loginSuccess);
  }
  function handleRegister(e) {
    e.preventDefault();
    const url = "http://localhost/reactdatabase/index.php";
    let fData = new FormData();
    fData.append("username", username);
    fData.append("password", password);
    fData.append("registerbtn", registerbtn);
    axios
      .post(url, fData)
      .then((responce) => console.log(responce))
      .catch((error) => console.log(error));

    console.log(registering ? "Register Pushed" : "Login Pushed");
    setUsername("");
    setPassword("");
  }

  function gotoRegister() {
    setUsername("");
    setPassword("");
    isRegistering(!registering);
    console.log(registering);
  }
  return (
    <>
      <Failedpopup loginSuccess={loginSuccess} />
      <div
        style={{ backgroundImage: `url('./images/img6.webp')` }}
        className={styles.loginregistercontainer}
      >
        <div
          className={`${styles.logincontainer} ${
            registering ? styles.registercontainer : ""
          }`}
        >
          <form className={styles.form} action="">
            <h1 className={styles.title1}>Welcome To</h1>
            <h1 className={styles.title2}>Urban Space</h1>
            <label className={styles.label} htmlFor="">
              Username
            </label>
            <input
              value={username}
              className={styles.input}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
            />
            <label className={styles.label} htmlFor="">
              Password
            </label>
            <input
              value={password}
              className={styles.input}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
            />
            <button
              className={styles.loginbtn}
              onClick={(e) =>
                registering ? handleRegister(e) : handleLogin(e)
              }
              type="submit"
            >
              {registering ? "Register" : "Login"}
            </button>

            <a className={styles.reglink} onClick={() => gotoRegister()}>
              {registering ? "I Already Have An Account" : "Create an Account"}
            </a>
          </form>
        </div>
      </div>
    </>
  );
}

// (response) =>
