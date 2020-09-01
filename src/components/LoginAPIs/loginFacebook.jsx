import React from "react";
import * as registerService from "../../services/registrationService";
import FacebookLogin from "react-facebook-login";
const FaLogin = ({ track }) => {
  const responseFacebook = async (response) => {
    const data = { username: "", email: "" };
    data.username = response.name;
    data.email = response.email;
    // console.log(response);
    try {
      // console.log(await registerService.register(data));
      const { data: jwt } = await registerService.register(data);
      console.log(jwt);
      localStorage.setItem("token", jwt);
      localStorage.setItem("source", response.picture.data.url);
      window.location = track ? track.from.pathname : "/";
    } catch (error) {}
  };
  return (
    <FacebookLogin
      appId="1941888859275550"
      fields="name,email,picture"
      // onClick={componentClicked}
      disableMobileRedirect={true}
      callback={responseFacebook}
    />
  );
};

export default FaLogin;
