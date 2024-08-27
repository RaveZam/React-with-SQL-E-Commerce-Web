import axios from "axios";
import { useState } from "react";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";

import Errorcomponent from "./Errorcomponent";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registering, isRegistering] = useState(false);
  const [loginbtn, pressloginbtn] = useState(false);
  const [registerbtn, pressregisterbtn] = useState(false);
  const [loginSuccess, setloginSuccess] = useState(true);
  const [registersuccess, setregisterSuccess] = useState(false);
  const [emptyLogin, setEmptylogin] = useState(false);
  const [invalidEmail, setinvalidEmail] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    const url = "http://localhost/reactdatabase/index.php";
    let fData = new FormData();
    fData.append("username", username);
    fData.append("password", password);
    fData.append("loginbtn", loginbtn);
    axios
      .post(url, fData)
      .then((responce) => {
        console.log(responce);
        if (responce.data.status === "loginsuccess") {
          setloginSuccess(true);
          console.log("Login success from react");
        } else if (responce.data.status === "empty") {
          setEmptylogin(true);
          console.log("Empty");
        } else if (responce.data.status === "incorrectpassword") {
          setloginSuccess(false);
          setEmptylogin(false);
          console.log("Incorrect Password");
        } else if (responce.data.status === "usernotfound") {
          setloginSuccess(false);
          setEmptylogin(false);
          console.log("User not found");
        }
      })
      .catch((error) => console.log(error));
    console.log(password);
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
      .then((responce) => {
        if (responce.data.status === "emailavail") {
          setregisterSuccess(true);
          console.log("Email Avail");
        } else if (responce.data.status === "emailtaken") {
          console.log("emailtaken");
        } else if (responce.data.status === "invalidemail") {
          console.log("invalidemail");
          setinvalidEmail(true);
        } else if (responce.data.status === "weakpassword") {
          console.log("weakpassword");
        } else if (responce.data.status === "strongpassword") {
          console.log("weakpassword");
        } else if (responce.data.status === "registersuccess") {
          console.log("registersuccess");
        }
      })
      .catch((error) => console.log(error));
    setUsername("");
    setPassword("");
  }

  function gotoRegister() {
    setUsername("");
    setPassword("");
    isRegistering(!registering);
  }

  return (
    <>
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
            <Errorcomponent
              condition={!loginSuccess}
              className={styles.showerrormsg}
              message="Incorrect Username and Password"
            />
            <Errorcomponent
              condition={emptyLogin}
              className={styles.showemptymsg}
              message="Please Input Username and Password"
            />
            <Errorcomponent
              condition={registersuccess}
              className={styles.showregsuccess}
              message="Account has been Created, Please Proceed to Login Window!"
            />
            <Errorcomponent
              condition={invalidEmail}
              className={styles.showinvalidemail}
              message="Invalid Email"
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
