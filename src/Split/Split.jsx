import React, { useContext, useEffect, useState, useCallback } from "react";
import './Split.css';
import Navbar from '../Navbar/Navbar';
import { SharedContext } from "../context/SharedContext";

const Split = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [qrCode, setQRCode] = useState('');
  const [requestedAmount, setRequestedAmount] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(1); // Default to 1 person
  const [errorMessage, setErrorMessage] = useState('');

  const { connectWallet, accountBalance, currentAccount, createSharedWallet } = useContext(SharedContext);

  useEffect(() => {
    setWalletAddress(currentAccount);
  }, [currentAccount]);

  const generateQRCode = (address, amountInWei) => {
    // Convert Wei to Ether
    const amountInEther = amountInWei * 10**18;
  
    const paymentRequestUri = `ethereum:${address}?value=${amountInEther}`;
  
    const generatedQRCode = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(paymentRequestUri)}&size=200x200`;
    setQRCode(generatedQRCode);
  };

  const calculateAmountPerPerson = useCallback(() => {
    if (!requestedAmount || Number(requestedAmount) <= 0) {
      setErrorMessage('Invalid amount. Please enter a valid amount greater than 0.');
      return;
    }
    
    if (!numberOfPeople || Number(numberOfPeople) <= 0) {
      setErrorMessage('Invalid number of people. Please enter a valid number greater than 0.');
      return;
    }

    setErrorMessage('');

    const amountPerPerson = Number(requestedAmount) / numberOfPeople;
    generateQRCode(walletAddress, amountPerPerson);
  }, [requestedAmount, numberOfPeople, walletAddress, generateQRCode]);

  return (
    <>
      <div className='split-body'>
        <div className='split-nav'>
          <Navbar />
        </div>
        <div className='split-content'>
          {walletAddress && (
            <div>
              <div className="head-split">Your Wallet Address:</div> <div>{walletAddress}</div>
              <br/>
              <div>
                Enter the amount you want to split
              </div>
              <input type='number' className='amt-to-split' value={requestedAmount} onChange={(e) => setRequestedAmount(e.target.value)} />
              <div>
                Enter the number of people you want to split the amount with
              </div>
              <input type='number' className='people' value={numberOfPeople} onChange={(e) => setNumberOfPeople(e.target.value)} />
              {errorMessage && <div className="error-message">{errorMessage}</div>}
              <br /><br />
              <button onClick={calculateAmountPerPerson} className="QR-req">Generate QR to Split</button>
              <br /><br />
              {qrCode && <img src={qrCode} alt="Request Payment QR Code" />}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Split;
