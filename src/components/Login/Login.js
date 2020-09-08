import React from "react";
import { Button } from "@material-ui/core";
import "../Login/login.css";
import { useStateValues } from "../../context/StateProvider";
import firebase from "firebase";
import { provider } from "../../firebase";
import { actionTypes } from "../../context/reducer";

export default function Login() {
  const [{}, dispatch] = useStateValues();

  const signIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({ type: actionTypes.SET_USER, user: result.user });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/597px-WhatsApp.svg.png"
          alt="logo"
        />
        <div className="login_text">
          <h1>Sign in to WhatsApp</h1>
        </div>

        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
}
