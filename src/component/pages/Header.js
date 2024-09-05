import React from "react";
import "../style/header.css";
import logo from "../../images/logo.svg";
import { BrowserRouter as Link } from "react-router-dom";

const header = () => {
  return (
    <>
      <div className="headercontainer">
        <div className="header">
          <div className="logo">
            <Link to="#">
              <img src={logo} width={170} height={36} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default header;
