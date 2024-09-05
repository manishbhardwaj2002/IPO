import React, { useState } from "react";
import "../style/modifymodal.css";

function ModifyModal({ setIpoModal, setModifyModal}) {
  const [editButton, setEditButton] = useState("Modify");
  const [border, setBorder] = useState(false);
  const [editBtn, setEditBtn] = useState(false);
  const [toggleValue, setToggleValue] = useState(true);
  const [formValue, setFormValue] = useState({
    UPIID: "",
    bid: "",
    bidprice: "",
  });

  const handleChange = (event) => {
    console.log(event);

    const { name, value } = event.target;

    setFormValue((prevState) => {
      console.log(prevState);
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleClick = (e) => {
    setBorder(true);
    setEditBtn(true);
    setEditButton("Submit");
  };

  const handleClose = () => {
    setModifyModal(false);
  };

  const handleClickValue = () => {
    setToggleValue(!toggleValue);
    setIpoModal(true);
    setModifyModal(false);
  };

  return (
    <div className="modalBackground">
      <div className="modifymodalContainer">
        <button className="xclose" onClick={() => setModifyModal(false)}>
          X
        </button>

        <div className="modifymodalbody">
          <div className="modifytopbar">
            <div className="togglebtnbox">
              <div className="ipobtn">
                <label class="switch">
                  <input type="checkbox" onClick={handleClickValue} checked />
                  <span class="slider round"></span>
                </label>
              </div>
              <span className="ipostatustext"> IPO Status</span>
            </div>

            <div class="searchbox">
              <span>
                <i class="fa fa-search"></i>
              </span>
              <input type="text" id="filter" placeholder="Search..." />{" "}
              <button type="button" className="searchbtn">
                Search
              </button>
            </div>
          </div>

          <div className="modifyqueryinfo">
            <div className="modifyinbodetails">
              <label>PAN</label>
              <input
                type="text"
                id=""
                name="PanNo"
                placeholder="ARPBL1234T"
                disabled={true}
              />
            </div>

            <div className="modifyinbodetails">
              <label>Client Name</label>
              <input
                type="text"
                id=""
                name="ClientName"
                placeholder="Ankur Sharma"
                disabled={true}
              />
            </div>

            <div className="modifyinbodetails">
              <label>Category</label>
              <input
                type="text"
                id=""
                name="Category"
                placeholder="IND"
                disabled={true}
              />
            </div>

            <div className="modifyinbodetails">
              <label>Application No.</label>
              <input
                type="text"
                id=""
                name="ApplicationNo"
                placeholder=""
                disabled={true}
              />
            </div>

            <div className="modifyinbodetails">
              <label>Symbol</label>
              <input
                type="text"
                id=""
                name="Symbol"
                placeholder="EMAIL"
                disabled={true}
              />
            </div>

            <div className="modifyinbodetails modifyinputc icone">
              <label>UPI Id</label>
              <input
                type="text"
                id=""
                onChange={handleChange}
                value={formValue.UPIID}
                name="UPIID"
                placeholder="9810579648@paytm"
                className={border === true ? "modifyinput" : "modifyinputen"}
              />
              <span className={editBtn === true ? "editbtn" : "editbtn2"}>
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </span>
            </div>

            <div className="modifyinbodetails ">
              <label>DPID</label>
              <input
                type="text"
                id=""
                name="DPID"
                placeholder=""
                disabled={true}
              />
            </div>

            <div className="modifyinbodetails modifyinputc">
              <label>Bid Qty</label>
              <input
                type="text"
                id=""
                onChange={handleChange}
                name="bid"
                value={formValue.bid}
                placeholder="14569"
                className={border === true ? "modifyinput" : "modifyinput2"}
              />
              <span className={editBtn === true ? "editbtn" : "editbtn2"}>
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </span>
            </div>

            <div className="modifyinbodetails modifyinputc">
              <label>Bid Price</label>
              <input
                type="text"
                id=""
                name="bidprice"
                onChange={handleChange}
                value={formValue.bidprice}
                placeholder="2"
                className={border === true ? "modifyinput" : "modifyinput2"}
              />
              <span className={editBtn === true ? "editbtn" : "editbtn2"}>
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </span>
            </div>

            <div className="modifyinbodetails">
              <label>Client/Beneficiary Id</label>
              <input
                type="text"
                id=""
                name="BeneficiaryId"
                placeholder="1205976497244769"
                disabled={true}
              />
            </div>

            <div className="modifyinbodetails">
              <label>Broker Code</label>
              <input type="text" id="" name="BrokerCode" disabled={true} />
            </div>

            <div className="modifyinbodetails">
              <label>UPI Status</label>
              <input type="text" id="" name="UPIStatus" disabled={true} />
            </div>

            <div className="modifyinbodetails">
              <label>DP Status</label>
              <input type="text" id="" name="DPStatus" disabled={true} />
            </div>

            <div className="clear"></div>

            <div className="btninfobox">
              <button type="button" className="modifybtn" onClick={handleClick}>
                {editButton}
              </button>
              <button type="button" onClick={handleClose} className="cancelbtn">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ModifyModal;
