import React from "react";
import { gmailContext } from "../App";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar"

function EmailMsg() {
  let navigate = useNavigate();

  let context = React.useContext(gmailContext);
  console.log(context.innerMsg);

  let jump = () => {
    navigate("/home");
  };

  return <>
      <Header />
    <div className="mt-2" style={{ marginLeft: "270px" }}>
      <Sidebar />
      <ArrowBackIcon
        onClick={() => jump()}
        style={{ color: "grey", cursor: "pointer" }}
      />
      <hr></hr>
      <div>
        <h3 className="mt-3 ml-3">Dear {context?.innerMsg?.to}</h3>
        <h5 className="mt-3 ml-3">{context.innerMsg.subject}</h5>
        <p
          className="d-flex flex-row justify-content-center"
          style={{ height: "500px", alignItem: "center", fontSize: "25px" }}
        >
          {context.innerMsg.message}
        </p>
      </div>
    </div>
    </>
}

export default EmailMsg;
