import React from "react";
import userIcon from "../../Images/userIcon.png";
import "./Header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="header-container">
        <Link to="www.google.com">
          <div className="app-logo">Movie App</div>
        </Link>
        <div className="userIconImg">
          <img src={userIcon} alt='userIcon'/>
        </div>
      </div>
    </>
  );
};

export default Header;
