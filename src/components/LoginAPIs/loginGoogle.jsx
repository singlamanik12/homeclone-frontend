import React from "react";
import GoogleLogin from "react-google-login";
import * as registerService from "../../services/registrationService";
import { Typography } from "@material-ui/core";
const GoLogin = () => {
  const ButtonText = <Typography variant="h6">Sign up with Google</Typography>;
  const responseGoogle = async (response) => {
    const data = { username: "", email: "", password: "default" };
    data.username = response.profileObj.name;
    data.email = response.profileObj.email;
    // console.log(response);
    try {
      // console.log(await registerService.register(data));
      const { data: jwt } = await registerService.register(data);
      console.log(jwt);
      localStorage.setItem("token", jwt);
      localStorage.setItem("source", response.profileObj.imageUrl);
      window.location = "/";
    } catch (error) {}
  };

  return (
    <GoogleLogin
      clientId="329628474320-ulcmikk1cb06e30bolofh27632g5a0rl.apps.googleusercontent.com"
      buttonText={ButtonText}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoLogin;
