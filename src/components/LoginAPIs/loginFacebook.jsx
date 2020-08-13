import React from "react";
import * as registerService from "../../services/registrationService";
import FacebookLogin from "react-facebook-login";
const FaLogin = () => {
  const responseFacebook = async (response) => {
    const data = { username: "", email: "", password: "default" };
    data.username = response.name;
    data.email = response.email;
    // console.log(response);
    try {
      // console.log(await registerService.register(data));
      const { data: jwt } = await registerService.register(data);
      console.log(jwt);
      localStorage.setItem("token", jwt);
      localStorage.setItem("source", response.picture.data.url);
      window.location = "/";
    } catch (error) {}
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
