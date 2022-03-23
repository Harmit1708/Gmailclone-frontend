import React from 'react'
import {gmailContext} from '../App'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from 'react-router-dom'

function EmailSentMsg() {

  let navigate = useNavigate()

  let context = React.useContext(gmailContext)
  console.log(context.sentMsg)


  let jump = () => {
    navigate("/send")
  }

  return <div className="mt-2" style={{ marginLeft: "270px" }}>
    <ArrowBackIcon onClick={()=>jump()} style={{color:"grey",cursor: "pointer"}}/>
    <hr></hr>
    <div>
        <h3 className="mt-3 ml-3">Dear {context?.sentMsg?.to}</h3>
        <h5 className="mt-3 ml-3">{context.sentMsg.subject}</h5>
        <p className="d-flex flex-row justify-content-center" style={{height:"500px",alignItem:"center",fontSize:"25px"}}>{context.sentMsg.message}</p>  
        </div>
    </div>
}

export default EmailSentMsg