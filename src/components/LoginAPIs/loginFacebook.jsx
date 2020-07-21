import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
const FaLogin = () => {
  const responseFacebook = (response) => {
    console.log(response);
  };
  return (
    <FacebookLogin
      appId="2703447153271553"
      //autoLoad
      fields="name,email,picture"
      // onClick={componentClicked}

      callback={responseFacebook}
    />
  );
};

export default FaLogin;
