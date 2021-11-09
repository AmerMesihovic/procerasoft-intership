import React from "react";
import Logo from "../../assets/images/headerLogo.png";
import magnifier from "../../assets/icons/magnifier.png";
import shopping from "../../assets/icons/shopping.png";
import { useHistory } from "react-router";

const Header = () => {
  const history = useHistory();
  console.log(history.location.pathname);
  return (
    <div
      className={
        history.location.pathname === "/"
          ? "header-container bg-image"
          : "header-container bg-color"
      }
    >
      <div className="nav-bar">
        <img className="logo" src={Logo} alt=""></img>
        <div className="search-wrapper">
          <input className="search"></input>
          <img className="src" src={magnifier} alt=""></img>
        </div>
        <div className="shop">
          <img className="shopping" src={shopping} alt=""></img>
          <div className="sign-in">Sign In</div>
        </div>
      </div>
      {history.location.pathname === "/" && (
        <>
          <p className="book-content">Which book do you wish for?</p>
          <div className="buttons">
            <div className="join-buttons">Sign Up</div>
            <div className="join-buttons">Sign In</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
