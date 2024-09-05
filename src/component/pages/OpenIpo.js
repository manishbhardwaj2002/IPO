import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../style/openipo.css";
import greenrupee from "../../images/green-rupee-icon.svg";
import redrupee from "../../images/red-rupee-icon.svg";
import Modal from "../modal/Modal";
import OtpModal from "../modal/OtpModal";
import ThanksModal from "../modal/ThanksModal";
import ModifyModal from "../modal/ModifyModal";

const OpenIpo = () => {
  // const [view, setView] = useState(false);
  // const [show, setShow] = useState(false);
  // const [view1, setView1] = useState(false);
  // const [view2, setView2] = useState(false);

  const [ipoModal, setIpoModal] = useState(false);
  const [otpModal, setOtpModal] = useState(false);
  const [thankModal, setThankModal] = useState(false);
  const [modifyModal, setModifyModal] = useState(false);

  const handleShow = () => {
    setIpoModal(true);
  };

  return (
    <>
      {/*******openipocontainer start*******/}
      <div className="openipocontainer">
        {/*******topbox start*******/}

        <div className="topbox">
          <div className="head">OPEN</div>
          <div className="searchbox">
            <span>
              <i className="fa fa-search" />
            </span>
            <input type="text" id="filter" placeholder="Search..." />
          </div>

          <div className="tabbox">
            <ul>
              <li>
                <NavLink  to="/">OPEN</NavLink>
              </li>
              <li>
                <NavLink to="/upcoming">UPCOMING</NavLink>
              </li>
              <li>
                <NavLink to="/closed">CLOSED</NavLink>
              </li>
            </ul>
          </div>

          <div className="clear"></div>
        </div>

        {/*******topbox end*******/}

        {/*******table data  start*******/}
        <table className="tabledata">
          <thead>
            <tr>
              <th>Companies</th>
              <th>Date</th>
              <th>Price Range</th>
              <th>Min. Amount</th>
              <th>Market Lot</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="companyname">EMIL</p>
                <span className="companyinfo">
                  Electronics Mart India Limited
                </span>
              </td>
              <td>4th - 7th Oct</td>
              <td>
                <span className="box">
                  <span className="imgbox-green">
                    <img src={greenrupee} alt="rupeeicon" />
                  </span>{" "}
                  <span className="price-range">56-59</span>
                </span>
              </td>
              <td>
                <span className="box">
                  <span className="imgbox-green">
                    <img src={redrupee} alt="rupeeicon" />
                  </span>{" "}
                  <span className="min-amount">14224</span>
                </span>
              </td>
              <td>14224</td>

              <td>
                <button className="applybtn" onClick={handleShow}>
                  Apply Now{" "}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        {/*******table data end*******/}

        {/* {view && (
          <Modal
            setView={setView}
            setShow={setShow}
            setView1={setView1}
            view={view}
            show={show}
            view1={view1}
            setView2={setView2}
          />
        )} */}
        {/* {show && (
          <OtpModal
            setShow={setShow}
            show={show}
            setView1={setView1}
            view1={view1}
          />
        )} */}

        {/* {view1 && (
          <ThanksModal
            setView1={setView1}
            show={show}
            setView2={setView2}
            view2={view2}
          />
        )} */}
        {/* {view2 && <ModifyModal setView2={setView2} setView={setView} />} */}

        {ipoModal && (
          <Modal
          setIpoModal={setIpoModal}
          setOtpModal={setOtpModal}
          ipoModal={ipoModal}
          otpModal={otpModal}
          setModifyModal={setModifyModal}
          />
        )}


{otpModal && (
          <OtpModal
          setOtpModal={setOtpModal}
          otpModal={otpModal}
          setThankModal={setThankModal}
          thankModal={thankModal}
          />
        )} 

 {thankModal && (
          <ThanksModal
          setThankModal={setThankModal}
          otpModal={otpModal}
          setModifyModal={setModifyModal}
          modifyModal={modifyModal}
          />
        )} 

{modifyModal && <ModifyModal setModifyModal={setModifyModal} setIpoModal={setIpoModal} />}
      </div>
      {/*******openipocontainer close*******/}
    </>
  );
};

export default OpenIpo;
