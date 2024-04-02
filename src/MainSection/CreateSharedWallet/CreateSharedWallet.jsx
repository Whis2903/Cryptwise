import React,{useState} from "react";
import { motion, AnimatePresence } from "framer-motion";

import swexit from "./exit-icon.svg";

import "./CreateSharedWallet.css";

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

const CreateSharedWallet = ({ open, onClose }) => {
  const [openSCard, setOpenSCard] = useState(false);

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
            <div className="swh1">Shared Wallet Name</div>
            <div className="swh2">Shared WalletID</div>
            <div className="setting-exit-btns">
              <div className="logo1" onClick={onClose}>
                <img src={swexit} alt="Exit shared wallet" />
              </div>
            </div>
          </div>
          <div></div>

          <div className="swbtn-btm">
            <div className="leave-wallet">Leave Wallet</div>
          </div>
        </div>
        <div >
        </div>
      </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CreateSharedWallet;
