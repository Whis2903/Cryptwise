import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';
import './Split.css';

const Split = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [qrCode, setQRCode] = useState('');
  const [requestedAmount, setRequestedAmount] = useState('');

  const connectWallet = async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

      setWalletAddress(accounts[0]);

      setQRCode('');
    } catch (error) {
      console.error('Error connecting to MetaMask:', error.message);
    }
  };

  const generateQRCode = (address, amountInWei) => {
    // Convert Wei to Ether
    const amountInEther = amountInWei * 10**18;
  
    const paymentRequestUri = `ethereum:${address}?value=${amountInEther}`;
  
    const generatedQRCode = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(paymentRequestUri)}&size=200x200`;
    setQRCode(generatedQRCode);
  };
  

  const sendRequest = () => {

    if (requestedAmount && Number(requestedAmount) > 0) {
      generateQRCode(walletAddress, requestedAmount);
    } else {
      console.error('Invalid requested amount.');
    }
  };

  return (
    <>
      <div>
        <button onClick={connectWallet}>Connect Wallet</button>
        {walletAddress && (
          <div>
            <p>Connected Wallet Address: {walletAddress}</p>
            <label>
              Enter Requested Amount:
              <input type="number" value={requestedAmount} onChange={(e) => setRequestedAmount(e.target.value)} />
            </label>
            <button onClick={sendRequest}>Send Request</button>
            <br /><br />
            {qrCode && <img src={qrCode} alt="Request Payment QR Code" />}
          </div>
        )}
      </div>
    </>
  );
};

export default Split;
