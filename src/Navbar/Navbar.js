import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import CryptWise from "./Logo.png";
import dashboardLogo from "./dasboard.svg";
import chatbotLogo from "./Chatbot.svg";
import depositsLogo from "./deposits.svg";
import profileLogo from "./user.svg";
import Charity from "../Charity/Charity";
import { IoIosGift, IoMdChatbubbles, IoMdDesktop, IoMdHome, IoMdPerson, IoMdRocket } from "react-icons/io";

const Navbar = () => {
  const [openCCard, setOpenCCard] = useState(false);

  const handleOpenCLogoClick = () => {
    setOpenCCard(true);
  };

  const CardCClose = () => {
    setOpenCCard(false);
  };

  return (
    <div className="navbar">
      <div className="emlogo">
        <img src={CryptWise} alt="Logo"  className="logoo"/>
      </div>

      <Link to="/dashboard" className="linkremove">
        <div className="nav-element">
          <IoMdDesktop className="nav-logo"/>
          <div className="nav-topic">Dashboard</div>
        </div>
      </Link>

      <Link to="#" className="linkremove">
        <div className="nav-element">
        <IoMdChatbubbles className="nav-logo" />
          <div className="nav-topic">Messages</div>
        </div>
      </Link>

      <div className="linkremove" onClick={handleOpenCLogoClick}>
        <div className="nav-element">
        <IoIosGift className="nav-logo"/>
          <div className="nav-topic">Charity</div>
        </div>
      </div>

      <Link to="/split" className="linkremove">
        <div className="nav-element">
        <IoMdPerson className="nav-logo"/>
          <div className="nav-topic">Split</div>
        </div>
      </Link>

      <Link to="/chatbot" className="linkremove">
        <div className="nav-element">
        <IoMdRocket className="nav-logo"/>
          <div className="nav-topic">Chatbot</div>
        </div>
      </Link>

      <Link to="/" className="linkremove">
        <div className="nav-element">
        <IoMdHome className="nav-logo"/>
          <div className="nav-topic">Landing Page</div>
        </div>
      </Link>

      {openCCard && <Charity open={openCCard} onClose={CardCClose} />}
    </div>
  );
};

export default Navbar;
