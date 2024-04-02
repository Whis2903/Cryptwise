import React, { useContext, useEffect, useState } from 'react';
import background from './BG.png';
import notif from './notification.svg';
import search from './search.svg';
import './Dashboard.css';
import Navbar from '../Navbar/Navbar';
import RightNav from '../RightNav/RightNav';
import MainSection from '../MainSection/MainSection';
import { SharedContext } from '../context/SharedContext';

const Dashboard = () => {
  const { connectWallet, currentAccount } = useContext(SharedContext);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Automatically reconfigure if the wallet is disconnected
    if (!currentAccount) {
      connectWallet();
    }

    // Update the user name when the current account changes
    setUserName(currentAccount);
  }, [currentAccount, connectWallet]);

  return (      
    <div className='full-page' style={{ backgroundImage: `url(${background})` }}>
      <div className='grid'>
        <Navbar />
        <div className='welcome-section'>
          <div className='welcome'>
            Welcome Back, {userName}
          </div>
          <div className='search-notif'>
            <div className='search'>
              <div className='search-section'>
                <img src={search} alt='search logo'/>
                <input type='text' className='search-input' placeholder='Search'></input>
              </div>
            </div>
            <div className='notif'>
              <img src={notif} className="notif-logo" alt="notification-logo" />
            </div>
          </div>
          <div className='userinfo'>
            {/* <button className='reconfigure' onClick={connectWallet}>Reconfigure</button> */}
          </div>
        </div>
      </div>
      <div className='grid2'>
        <MainSection className='midSection' />
        <RightNav />
      </div>
    </div>
  );
}

export default Dashboard;
