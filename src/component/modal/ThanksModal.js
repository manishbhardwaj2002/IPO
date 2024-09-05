import React, { useState } from "react";
import "../style/thanksmodal.css";
import thanksicon from "../../images/success.gif";

function ThanksModal({ setThankModal,setModifyModal }) {
  const [thankImg, setThankImg] = useState(thanksicon);
  console.log(setThankImg);

  const handleClick = () => {
    setModifyModal(true);
    setThankModal(false);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainerthanks">
        <button className="xclose" onClick={() => setThankModal(false)}>
          {" "}
          X{" "}
        </button>
        <div className="modalbody">
          <div className="sucessinfo">
            <img src={thankImg}  style={{'width':'50%', 'margin':'auto', 'display':'block'}}alt="thanks" />
          </div>
          <div className="thankcontent">
            <p>
              Thank you for Apply IPO, Your Application Number is
              <span class="green">800204057</span>
            </p>
          </div>

          <div className="otpbox">
            <button className="submitbtn openmodal" onClick={handleClick}>
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ThanksModal;
