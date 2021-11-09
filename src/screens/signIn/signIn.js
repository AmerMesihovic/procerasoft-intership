import React from "react";
import { useHistory } from "react-router";

const SignIn = () => {
  const history = useHistory();
  console.log(history.location.pathname);
  return (
    <div
      className={
        history.location.pathname === "/"
          ? "header-container bg-image"
          : "header-container bg-color"
      }
    ></div>
  );
};

export default SignIn;
