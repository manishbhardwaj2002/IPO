import React, { useState } from "react";
import "../style/otpmodal.css";

function OtpModal({ setOtpModal,  setThankModal }) {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handlechangeotp = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = () => {
    setThankModal(true);
    setOtpModal(false);
  };

  return (
    /*****Modal background otp start*****/
    <div className="modalBackgroundotp">
      {/*****modalContainer start*****/}
      <div className="modalContainer">
        <button className="xclose" onClick={() => setOtpModal(false)}>
          {" "}
          X{" "}
        </button>
        {/****modalbody start*****/}
        <div className="modalbody">
          <div className="head">Enter One Time Password (OTP)</div>
          <div className="des">
            One time password (OTP) has been sent to your mobile 8700029462,
            Please enter 4 digit OTP number
          </div>

          <div className="otpbox">
            {otp.map((data, index) => {
              return (
                <input
                  type="text"
                  name="otp"
                  placeholder="-"
                  maxLength={1}
                  value={data}
                  key={index}
                  onChange={(e) => handlechangeotp(e.target, index)}
                  onFocus={(e) => e.target.select()}
                />
              );
            })}
          </div>
          <div className="resend">
            <span>Didn't receive the OTP?</span>{" "}
            <span className="green">Resend in 20 sec</span>
          </div>

          <div className="otpbox">
            <button className="submitbtn openmodal" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          <button className="resendbtn">Resend</button>
        </div>
        {/****modalbody close*****/}
      </div>
      {/*****modalContainer close*****/}
    </div>
    /*****Modal background otp close*****/
  );
}
export default OtpModal;
