import React from "react";
import Chatbox from "./Chatbox";
import { useRef } from "react";
import userEvent from "@testing-library/user-event";

function Footer() {
  const chat = useRef();
  const openchatbtn = useRef()

  return (
    <div className="footer ">
      {/* <Chatbox /> */}
      <div className="chatbox">
        {" "}
        <iframe
          style={{ position: "relative", display:"none" }}
          width="350"
          title="f"
          
          ref={chat}
          height="430"
          allow="microphone;"
          src="https://console.dialogflow.com/api-client/demo/embedded/4b32c0bd-2535-46b6-ac0c-364602e65ac4"
        />
        <button
          className="close-btn btn btn-danger"
          onClick={() => {
            chat.current.style.display = "none";
            openchatbtn.current.style.display = "block";
          }}
        >
          X
        </button>
      </div>
      <button
      ref={openchatbtn}
      onClick={()=>{
        chat.current.style.display= "block"
        openchatbtn.current.style.display = "none";
      }} className="chatbox btn btn-primary"> OPEN A NEW CHAT</button>
    </div>
  );
}

export default Footer;
