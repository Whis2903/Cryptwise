import React,{useContext, useEffect, useState} from "react";
import { motion, AnimatePresence } from "framer-motion";

import swexit from "./exit-icon.svg";
import swsettings from "./sw-settings.svg";
import vector1 from "./vector1.svg";
import vector2 from "./vector2.svg";
import vector3 from "./vector3.svg";
import vector4 from "./vector4.svg";
import vector5 from "./vector5.svg";

import "./SharedWallet.css";
import SettingsSW from './SettingsSW/SettingsSW';
import { SharedContext } from "../../../context/SharedContext";

const pro1 = {
  hidden: {
    y: '100px',
    opacity: 0,
  },
  visible: {
    y: '200px',
    opacity: 1,
    transition: { delay: 0.0 },
  },
};

const SharedWallet = ({ open, onClose, walletId, walletName, goalAmount, borrowLimit, walletBalance}) => {

  const [openSCard, setOpenSCard] = useState(false);

  const convertWeiToEther = (weiValue) => {
    const etherValue = weiValue / 1e18;
    return etherValue.toFixed(2);
  };

  const decimalGoal = convertWeiToEther(goalAmount)/1e18;
  const decimalbl = convertWeiToEther(borrowLimit)/1e18;


  const handleOpenSLogoClick = () => {
    setOpenSCard(true);
    
  };

  function CardSClose() {
    setOpenSCard(false);
  }

  var unit = "ETHEREUM";
  if (!open) return null;
  
  return (
    <AnimatePresence>
    <div>
      <motion.div
        class="pro1"
        id="pro1"
        variants={pro1}
        initial="hidden"
        animate="visible"
      >
        <div className="swmain">
          <div className="swheader">
            <div className="swh1">{walletName}</div>
            <div className="swh2">{walletId}</div>
            <div className="setting-exit-btns">
              <div className="logo1" onClick={onClose}>
                <img src={swexit} alt="Exit shared wallet" />
              </div>
              <div className="logo2" onClick={handleOpenSLogoClick}>
                <img src={swsettings} alt="Open shared wallet settings" />
              </div>
            </div>
          </div>
          <div></div>

          <div className="swinfos">
          {/* card1 */}
            <div className="swinfo info1">
              <div className="swlogo-back">
                <img src={vector1} />
              </div>
              <div className="swvalue">{walletBalance} {unit}</div>
              <div className="swlogo">Balance</div>
            </div>
            {/* card2 */}
            <div className="swinfo info1">
              <div className="swlogo-back">
                <img src={vector2} />
              </div>
              <div className="swvalue">{decimalGoal} {unit}</div>
              <div className="swlogo">Goal</div>
            </div>
            {/* card3 */}
            <div className="swinfo info1">
              <div className="swlogo-back">
                <img src={vector3} />
              </div>
              <div className="swvalue">{decimalbl} {unit}</div>
              <div className="swlogo">Borrow Limit</div>
            </div>
            <div className="swibottom">
            {/* card4 */}
            <div className="swinfo info1 b1 members-card">
              <div className="swlogo-back">
                <img src={vector4} />
              </div>
              <div className="swvalue">8 Members</div>
              <div className="swlogo">Participants</div>
            </div>
            {/* card5 */}
            <div className="swinfo info1 b2 trn-hist">
              <div className="swlogo-back">
                <img src={vector5} />
              </div>
              <div className="swvalue">Transaction</div>
              <div className="swlogo">History</div>
            </div>

            </div>
          </div>
          <div className="swbtn-btm">
            <div className="leave-wallet">Leave Wallet</div>
          </div>
        </div>
        <div >
        {openSCard && <SettingsSW sopen={openSCard} onClose={CardSClose} />}
        </div>
      </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SharedWallet;
