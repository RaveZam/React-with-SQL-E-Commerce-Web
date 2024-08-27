import axios from "axios";
import { useState } from "react";
import styles from "./login.module.css";

import Errorcomponent from "./Errorcomponent";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registering, isRegistering] = useState(false);
  const [loginbtn, pressloginbtn] = useState(false);
  const [registerbtn, pressregisterbtn] = useState(false);
  const [registersuccess, setregisterSuccess] = useState(false);
  const [emptyLogin, setEmptylogin] = useState(false);
  const [invalidEmail, setinvalidEmail] = useState(false);
  const [incorrectpassword, setincorrectpassword] = useState(false);
  const [usernotfound, setusernotfound] = useState(false);
  const [emailTaken, setEmailtaken] = useState(false);
  const [weakpassword, setweakpassword] = useState(false);

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
          setEmptylogin(false);
          setusernotfound(false);
          setincorrectpassword(false);
          console.log("Login success from react");
        } else if (responce.data.status === "empty") {
          setEmptylogin(true);
          console.log("Empty");
        } else if (responce.data.status === "incorrectpassword") {
          setusernotfound(false);
          setEmptylogin(false);
          setincorrectpassword(true);
          console.log("Incorrect Password");
        } else if (responce.data.status === "usernotfound") {
          setEmptylogin(false);
          setusernotfound(true);
          setincorrectpassword(false);
          console.log("User not found");
        }
      })
      .catch((error) => console.log(error));
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
          console.log("Email Avail");
        } else if (responce.data.status === "emailtaken") {
          console.log("emailtaken");
          setEmailtaken(true);
        } else if (responce.data.status === "invalidemail") {
          console.log("invalidemail");
          setinvalidEmail(true);
        } else if (responce.data.status === "weakpassword") {
          setEmailtaken(false);
          console.log("weakpassword");
          setweakpassword(true);
        } else if (responce.data.status === "strongpassword") {
          console.log("weakpassword");
        } else if (responce.data.status === "registersuccess") {
          console.log("registersuccess");
          setregisterSuccess(true);
        }
      })
      .catch((error) => console.log(error));
  }

  function gotoRegister() {
    setUsername("");
    setPassword("");
    isRegistering(!registering);
    setregisterSuccess(false);
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
              condition={emptyLogin}
              className={styles.showemptymsg}
              message="Please Input Username and Password"
            />
            <Errorcomponent
              condition={incorrectpassword}
              className={styles.showincorrectpassword}
              message="Incorrect Password"
            />
            <Errorcomponent
              condition={usernotfound}
              className={styles.showusernotfound}
              message="Email Does not Exist"
            />
            {/* Register Error Components */}
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
            <Errorcomponent
              condition={emailTaken}
              className={styles.showemailtaken}
              message="Email Already Exists"
            />
            <Errorcomponent
              condition={weakpassword}
              className={styles.showweakpassword}
              message="Password must contain atleast one Uppercase,Lowercase and Number"
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
