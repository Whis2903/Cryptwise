// SettingsSW.js
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Charity.css";
import swexit from "./exit-icon.svg";
import CharityCard from "./CharityCard/CharityCard";
import search from './search.svg';


const pro3 = {
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
        class="pro3"
        id="pro3"
        variants={pro3}
        initial="hidden"
        animate="visible"
      >
        <div className="swmain1">
          <div>
            <div className="swh5">DONATE
            <div className='search-section1'>
            <img src={search} alt='search logo'/>
            <input type='text' className='search-input1' placeholder='Search'></input>
        </div>
            <div className="logo5" onClick={onClose}>
                <img src={swexit} alt="Exit shared wallet" />
              </div>
              </div>
          </div>

          <div>
            <div className="charity-header">
                <div className="cha-wallid">Wallet ID</div>
                <div className="cha-wallname">Charity Name</div>
                <div className="cha-walldonate">Donate</div>
            </div>
            <div className="charity-info">
            <CharityCard />
            <CharityCard />
            <CharityCard />
            <CharityCard />
            <CharityCard />
            <CharityCard />
            <CharityCard />
            <CharityCard />
            <CharityCard />
            <CharityCard />
            <CharityCard />
            <CharityCard />
            <CharityCard />

            </div>
          </div>
        </div>
        <div></div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SettingsSW;
