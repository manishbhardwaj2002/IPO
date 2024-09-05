import React from "react";
// import {NavLink} from 'react-router-dom';
import "../style/ipobar.css";

const IpoBar = () => {
  return (
    <>
      <div className="ipobarcontainer">
        <div className="topnav">
          <ul>
            <li>
              <a className="active" href="">
                IPO
              </a>
            </li>
            <li>
              <a href="#">BUY BACK</a>
            </li>
            <li>
              <a href="#">SGB</a>
            </li>
            <li>
              <a href="#">NCB</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default IpoBar;
