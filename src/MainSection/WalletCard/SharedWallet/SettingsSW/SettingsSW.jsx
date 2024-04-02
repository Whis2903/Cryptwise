// SettingsSW.js
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SettingsSW.css";
import swexit from "./exit-icon.svg";
import swsettings from "./sw-settings.svg";
import vector1 from "./vector1.svg";
import vector2 from "./vector2.svg";
import vector3 from "./vector3.svg";
import vector4 from "./vector4.svg";
import vector5 from "./vector5.svg";

const pro2 = {
  hidden: {
    y: "100px",
    opacity: 0,
  },
  visible: {
    y: "200px",
    opacity: 1,
    transition: { delay: 0.0 },
  },
};

const SettingsSW = ({ sopen, onClose }) => {
  var unit = "ETHEREUM";
  if (!sopen) return null;
  return (
    <AnimatePresence>
      <motion.div
        class="pro2"
        id="pro2"
        variants={pro2}
        initial="hidden"
        animate="visible"
      >
        <div className="swmain1">
          <div>
            <div className="swh1">SETTINGS</div>
            <div className="setting-exit-btns">
              <div className="logo1" onClick={onClose}>
                <img src={swexit} alt="Exit shared wallet" />
              </div>
            </div>
          </div>

          <div className="settings-main">
            <div className="swn">Shared Wallet Name</div>
            <div className="tabs">Shared Wallet ID</div>

            <div className="row1">
              <div>Borrow Limit</div>
              <div className="set-tab">
                <div className="set-value">3 Eth</div>
                <div className="set-but">Edit</div>
              </div>
            </div>
            <div className="row1">
              <div>Goal</div>
              <div className="set-tab">
                <div className="set-value">15 Eth</div>
                <div className="set-but">Edit</div>
              </div>
            </div>
            <div className="row1">
              <div>Borrow Limit</div>
              <div className="set-tab">
                <div className="set-value">3 Eth</div>
                <div className="set-but">Search</div>
              </div>
            </div>
            <div className="hist-head">History</div>
            <div className="wallet-hist">
              <div className="hist-ele">
                <div>Shreeya borrowed 2Eth</div>
                <div className="hist-date">26 JAN,2024</div>
              </div>
              <div className="hist-ele">
                <div>Shreeya borrowed 2Eth</div>
                <div className="hist-date">26 JAN,2024</div>
              </div>
              <div className="hist-ele">
                <div>Shreeya borrowed 2Eth</div>
                <div className="hist-date">26 JAN,2024</div>
              </div>
              <div className="hist-ele">
                <div>Shreeya borrowed 2Eth</div>
                <div className="hist-date">26 JAN,2024</div>
              </div>
              <div className="hist-ele">
                <div>Shreeya borrowed 2Eth</div>
                <div className="hist-date">26 JAN,2024</div>
              </div>
              <div className="hist-ele">
                <div>Shreeya borrowed 2Eth</div>
                <div className="hist-date">26 JAN,2024</div>
              </div>
              <div className="hist-ele">
                <div>Shreeya borrowed 2Eth</div>
                <div className="hist-date">26 JAN,2024</div>
              </div>
            </div>
          </div>
          <div className="swbtn-btm">
            <div className="leave-wallet">Delete Wallet</div>
          </div>
        </div>
        <div></div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SettingsSW;
