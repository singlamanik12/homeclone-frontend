import React, { Component, useState } from "react";
import GoogleLogin from "react-google-login";
import * as registerService from "../../services/registrationService";
import { Typography } from "@material-ui/core";
const GoLogin = () => {
  const ButtonText = <Typography variant="h6">Sign up with Google</Typography>;
  const responseGoogle = async (response) => {
    const data = { username: "", email: "", password: "" };
    data.username = response.profileObj.name;
    data.email = response.profileObj.email;
    try {
      // console.log(await registerService.register(data));
      const { user: jwt } = await registerService.register(data);
      console.log(jwt);
      localStorage.setItem("token", jwt);
      window.location = "/";
    } catch (error) {}
  };

  return (
    <GoogleLogin
      clientId="329628474320-37m0qh0d70t8pr1cgj1uma9o23nhg7dg.apps.googleusercontent.com"
      buttonText={ButtonText}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoLogin;
