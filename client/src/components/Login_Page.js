import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "../styles/Login_Page_styles.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const Login_Page = () => {
  const clientid = "606489177065-u2uniq2mceq76a28obhvve7sk0jpoh7r.apps.googleusercontent.com";
  const [showLoginButton, setshowLoginButton] = useState(true);
  const [showLogoutButton, setshowLogoutButton] = useState(false);

  const onLoginSuccess = (res) => {
    console.log("Login Success: ", res.profileObj);
    setshowLoginButton(false);
    setshowLogoutButton(true);
  };

  const onFailureSuccess = (res) => {
    console.log("Login Failed: ", res);
  };

  const onSignoutSuccess = () => {
    alert("You have been signed out successfully");
    setshowLoginButton(true);
    setshowLogoutButton(false);
  };

  return (
    <>
      {showLoginButton ? (
        <GoogleLogin
          clientId={clientid}
          buttonText="GOOGLE"
          onSuccess={onLoginSuccess}
          onFailure={onFailureSuccess}
          cookiePolicy={"single_host_origin"}
        />
      ) : null}
      {showLogoutButton ? (
        <GoogleLogout
          clientId={clientid}
          buttonText="Logout"
          onLogoutSuccess={onSignoutSuccess}
        ></GoogleLogout>
      ) : null}
    </>
  );
};

export default Login_Page;
