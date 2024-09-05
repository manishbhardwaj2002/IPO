import React, { useState } from "react";
import "../style/modal.css";
import upilogo from "../../images/upilogo.svg";
import rupee from "../../images/rupee.svg";

function Modal({ setIpoModal, setOtpModal, setModifyModal }) {
  const [bidDetails, setBidDetails] = useState([{ Bidbox: "" }]);
  const [toggle, setToggle] = useState(false);

  const handleAddFields = () => {
    const add = [...bidDetails, []];
    setBidDetails(add);
  };

  let handleRemoveFields = (id) => {
    let newBidDetails = [...bidDetails];
    newBidDetails.splice(id, 1);
    setBidDetails(newBidDetails);
  };

  let [num, setNum] = useState(1);
  let [shareprice, setshareprice] = useState(14605);
  let shareincre = () => {
    if (num < 15) {
      setNum(Number(num) + 1);
      setshareprice(shareprice * 2);
    }
  };
  let shareDec = () => {
    if (num > 1) {
      setNum(num - 1);
      setshareprice(shareprice / 2);
    }
  };
  let handleChange = (e) => {
    bidDetails[e.target.name] = e.target.value;
    setNum(e.target.value);
  };

  const handleSubmit = () => {
    setOtpModal(true);
    setIpoModal(false);
  };

  const handleClose = () => {
    setIpoModal(false);
  };

  const handleClickModify = () => {
    setToggle(!toggle);
    setModifyModal(true);
    setIpoModal(false);
  };

  return (
    /***modal background  start */
    <div className="modalBackground" id="openipo">
      {/****modalContaineripo ipo start */}
      <div className="modalContaineripo">
        <button className="xclose" onClick={handleClose}>
          {" "}
          X{" "}
        </button>
        {/****modalbody start */}
        <div className="modalbody">
          {/****leftpanel start */}
          <div className="leftpanel">
            <div className="topinfo">
              <div className="titlebox">
                <div className="head">EMIL</div>
                <div className="companyinfo">
                  Electronics Mart India Limited
                </div>
              </div>
              <div className="ipostatus">
                <span className="ipobtn">
                  <label className="switch">
                    <input type="checkbox" />
                    <span
                      className="slider round"
                      onClick={handleClickModify}
                    ></span>
                  </label>
                </span>
                <span className="ipostatustext"> IPO Status</span>
              </div>
            </div>

            <table className="issuedetails">
              <tr>
                <td className="issuedetailinfo">Investor Type</td>
                <td className="issueinfo">Individual</td>
              </tr>
              <tr>
                <td className="issuedetailinfo">Issue Dates</td>
                <td className="issueinfo">4th - 7th Oct</td>
              </tr>
              <tr>
                <td className="issuedetailinfo">Issue size (no of shares)</td>
                <td className="issueinfo">625500000</td>
              </tr>
              <tr>
                <td className="issuedetailinfo">Issue price range</td>
                <td className="issueinfo">
                  <i className="fa fa-inr" aria-hidden="true"></i> 56 - 59
                </td>
              </tr>

              <tr>
                <td className="issuedetailinfo">Lots size</td>
                <td className="issueinfo">
                  <i className="fa fa-inr" aria-hidden="true"></i> 254
                </td>
              </tr>

              <tr>
                <td className="issuedetailinfo">Discount</td>
                <td className="issueinfo">NA</td>
              </tr>
            </table>

            <div className="terms">
              <div className="chekboxinfo">
                <input type="checkbox" id="" name="" value="" required={true} />
              </div>
              <span>
                I hereby undertake that I have read the Red Herring Prospectus
                and I am an eligible UPI bidder as per the applicable provisions
                of the SEBI (Issue of Capital and Disclosure Requirement)
                Regulation, 2018.
              </span>
              <div className="clear"></div>
            </div>
          </div>
          {/****leftpanel close */}
          {/****rightpanel start */}
          <div className="rightpanel">
            <div className="head">IPO Application</div>
            <div className="queryform">
              <div className="personal-details">
                <div className="infobox">
                  <label>
                    Pan Number <sup>*</sup>
                  </label>
                  <input type="text" name="panNumber" />
                </div>

                <div className="infobox">
                  <label>
                    Mobile Number <sup>*</sup>
                  </label>
                  <input type="text" name="mobileNumber" />
                </div>
                <div className="clear"></div>
                <div className="client">
                  <label>
                    Client Name <sup>*</sup>
                  </label>
                  <input type="text" name="clientName" />
                </div>

                <div className="infobox">
                  <label>Group Code </label>
                  <input type="text" name="groupCode" />
                </div>

                <div className="infobox">
                  <label>Client Type</label>
                  <input type="text" name="clientCode" />
                </div>

                <div className="infobox">
                  <label>DP Name</label>
                  <input type="text" name="dpname" />
                </div>

                <div className="infobox">
                  <label>
                    Client/Beneficiary Id <sup>*</sup>
                  </label>
                  <input type="text" name="clientBenificaryName" />
                </div>
              </div>

              <div className="clear"></div>

              <div className="bidinfo">
                <div className="biddetails">
                  {
                    <span
                      className="bidnumber"
                      id="bid1"
                      style={{ marginLeft: "5px" }}
                      onClick={() => handleRemoveFields()}
                    >
                      Bid 1<span className="x">X</span>{" "}
                    </span>
                  }
                  {
                    <span
                      className="bidnumber"
                      id="bid2"
                      style={{ marginLeft: "5px" }}
                      onClick={() => handleRemoveFields()}
                    >
                      Bid 2<span className="x">X</span>{" "}
                    </span>
                  }
                  {
                    <span
                      className="bidnumber"
                      id="bid3"
                      style={{ marginLeft: "5px" }}
                      onClick={() => handleRemoveFields()}
                    >
                      Bid 3<span className="x">X</span>{" "}
                    </span>
                  }
                  <div className="clear"></div>
                </div>
                <div className="bidbtn" style={{ float: "right" }}>
                  <button
                    type="button"
                    className="addbtn"
                    onClick={() => handleAddFields()}
                    disabled={bidDetails.length === 3}
                  >
                    {" "}
                    + add Bid
                  </button>
                </div>
                <div className="clear"></div>
              </div>

              {bidDetails.map((bidinfo, index) => (
                <>
                  <div className="boxinfobox" key={index}>
                    <div className="shareinfo">
                      <label>Shares</label>
                      <div className="shareinc">
                        <button
                          className="decbtn"
                          type="button"
                          onClick={shareDec}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          className="datashow"
                          value={num}
                          onChange={handleChange}
                        />
                        <button
                          className="incbtn"
                          type="button"
                          onClick={shareincre}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="shareinfo">
                      <label style={{ marginLeft: "20px" }}>Bid Price</label>
                      <div className="totalshareprice">{shareprice}</div>
                    </div>
                    <span className="cutoff">
                      <input type="checkbox" id="" name="" value="" />
                      At Cutoff Price
                    </span>
                    <div className="clear"></div>
                  </div>
                </>
              ))}

              <div className="paymentdetails">
                <div className="logo">
                  <img src={upilogo} alt="" />
                </div>
                <div className="client">
                  <input type="text" name="" placeholder="Enter UPI Id" />
                </div>
              </div>

              <div className="paymentcontent">
                <span className="amount">Amount Payable</span>
                <span className="amountdes">
                  <span className="rupeeinfo">
                    <img src={rupee} alt="rupee" />
                  </span>
                  <span className="amt">{shareprice}</span>
                </span>
                <div className="clear"></div>
              </div>

              <div className="btninfobox">
                <div className="otpbox">
                  <button className="submitbtn" onClick={handleSubmit}>
                    Submit
                  </button>
                </div>

                <button onClick={handleClose} className="cancelbtn">
                  Cancel
                </button>
              </div>
            </div>
            <div className="clear"></div>
          </div>
          <div className="clear"></div>
          {/****rightpanel close */}
        </div>
        {/****modalbody close */}
      </div>

      {/****modalContaineripo ipo close */}
    </div>
    /***modal background  close */
  );
}
export default Modal;
