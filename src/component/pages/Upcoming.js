import React from "react";
import { NavLink } from "react-router-dom";
import "../style/upcoming.css";
import greenrupee from "../../images/green-rupee-icon.svg";
import redrupee from "../../images/red-rupee-icon.svg";

const UpComingIpo = () => {
  return (
    <>
      <div className="upcomingipocontainer">
        <div className="topbox">
          <div className="head">UPCOMING</div>
          <div className="searchbox">
            <span>
              <i className="fa fa-search" />
            </span>
            <input type="text" id="filter" placeholder="Search..." />
          </div>
          <div className="tabbox">
            <ul>
              <li>
                <NavLink to="/openipo">OPEN</NavLink>
              </li>
              <li>
                <NavLink  to="/upcoming">
                  UPCOMING
                </NavLink>
              </li>
              <li>
                <NavLink to="/closed">CLOSED</NavLink>
              </li>
            </ul>
          </div>
          <div className="clear"></div>
        </div>

        <table class="tabledata">
          <thead>
            <tr>
              <th style={{ width: "25%" }}>Companies</th>
              <th style={{ width: "22%" }}>Date</th>
              <th style={{ width: "22%" }}>Price Range</th>
              <th style={{ width: "22%" }}>Min. Amount</th>
              <th style={{ width: "9%" }}>Market Lot</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="companyname">CARGOSOL</p>
                <span className="companyinfo">Cargosol Logistics Limited</span>
              </td>
              <td>4th - 7th Oct</td>
              <td>
                <span class="box">
                  <span className="imgbox-green">
                    <img src={greenrupee} alt="rupeeicon" />
                  </span>{" "}
                  <span className="price-range">56-59</span>
                </span>
              </td>
              <td>
                <span class="box">
                  <span className="imgbox-green">
                    <img src={redrupee} alt="rupeeicon" />
                  </span>{" "}
                  <span className="min-amount">14224</span>
                </span>
              </td>
              <td style={{ textAlign: "right" }}>14224</td>
            </tr>
            <tr>
              <td>
                <p className="companyname">SRSOLTD</p>
                <span className="companyinfo">
                  Silicon Rental Solutions Ltd
                </span>
              </td>
              <td>4th - 7th Oct</td>
              <td>
                <span class="box">
                  <span className="imgbox-green">
                    <img src={greenrupee} alt="rupeeicon" />
                  </span>{" "}
                  <span className="price-range">56-59</span>
                </span>
              </td>
              <td>
                <span class="box">
                  <span className="imgbox-green">
                    <img src={redrupee} alt="rupeeicon" />
                  </span>{" "}
                  <span className="min-amount">25789</span>
                </span>
              </td>
              <td style={{ textAlign: "right" }}>59751</td>
            </tr>

            <tr>
              <td>
                <p className="companyname">CCSL</p>
                <span className="companyinfo">
                  Concord Control Systems Limited
                </span>
              </td>
              <td>4th - 7th Oct</td>
              <td>
                <span class="box">
                  <span className="imgbox-green">
                    <img src={greenrupee} alt="rupeeicon" />
                  </span>{" "}
                  <span className="price-range">56-59</span>
                </span>
              </td>
              <td>
                <span class="box">
                  <span className="imgbox-green">
                    <img src={redrupee} alt="rupeeicon" />
                  </span>{" "}
                  <span className="min-amount">12597</span>
                </span>
              </td>
              <td style={{ textAlign: "right" }}>69784</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UpComingIpo;
