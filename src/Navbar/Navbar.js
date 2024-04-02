import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import CryptWise from "./Logo.png";
// eslint-disable-next-line
import dashboardLogo from "./dasboard.svg";
// eslint-disable-next-line
import chatbotLogo from "./Chatbot.svg";
// eslint-disable-next-line
import depositsLogo from "./deposits.svg";
// eslint-disable-next-line
import profileLogo from "./user.svg";
// eslint-disable-next-line
import SettingsSW from "../Charity/Charity";
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

      <Link to="/charity" className="linkremove" onClick={handleOpenCLogoClick}>
        <div className="nav-element">
        <IoIosGift className="nav-logo"/>
          <div className="nav-topic">Charity</div>
        </div>
      </Link>

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

      {openCCard && <SettingsSW open={openCCard} onClose={CardCClose} />}
    </div>
  );
};

export default Navbar;
