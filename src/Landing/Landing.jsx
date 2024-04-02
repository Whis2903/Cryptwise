import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import Typewriter from "typewriter-effect";

import './Landing.css';
import CryptWiseLogo from './favicon.png';
import { SharedContext } from '../context/SharedContext';

const Landing = () => {
    
    const navigate= useNavigate();
    const {connectWallet} = useContext(SharedContext);

    const handleConnect = async ()=>{
      await connectWallet();
      navigate('/dashboard');
    }

  return (
    <div className='landing-back'>
        <img src={CryptWiseLogo} alt="ethershare logo" className='es-logo'/>
        <div className='ES-name'>CRYPTWISE</div>
        <div className='desc-es'>
        <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Built for HackwithIndia 2024<br>")
                  .pauseFor(0)
                  .typeString("Team MAVERICKS")
                  //  .deleteAll()
                  .start();
              }}
            />
          
          </div>
        <div className='connect-wallet' onClick={handleConnect}>
        <span className='land-button'>Link MetaMask Wallet</span>
        </div>
    </div>
  )
}

export default Landing