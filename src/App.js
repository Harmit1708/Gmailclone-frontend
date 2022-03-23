import React from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Header
import Header from "../src/Components/Header";
import Sidebar from "../src/Components/Sidebar";
import Home from "../src/Components/Home";
import Emailmsg from "./Components/EmailListInnerMsg";
import Emailsent from "../src/Components/EmailSent";
import EmailSentMsg from '../src/Components/EmailSentMsg'
import StarredEmail from '../src/Components/StarredEmail'
export const gmailContext = React.createContext();

function App() {

  let [favorite,setFavorite] = React.useState([]);

  let [innerMsg,setInnerMsg] = React.useState();

  let [sentMsg,setSendMsg] = React.useState();
  return (
    <>
      <BrowserRouter>
        <gmailContext.Provider value={{favorite,setFavorite,innerMsg,setInnerMsg,sentMsg,setSendMsg}}>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mail" element={<Emailmsg />} />
          <Route path="/send" element={<Emailsent />} />
          <Route path="/innermsg" element={<EmailSentMsg/>}/>
          <Route path="/favorite" element={<StarredEmail />} />
        </Routes>
        </gmailContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
 