import React, { useState } from 'react';
import Web3 from 'web3';
import { useNavigate } from 'react-router-dom';

const BusinessCard: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [businessDescription, setBusinessDescription] = useState('');

  const [registrationNumber, setRegistrationNumber] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [isFeePaid, setIsFeePaid] = useState(false);
  const [isBusinessCreated, setIsBusinessCreated] = useState(false);

  const navigate = useNavigate();

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error('Wallet connection failed:', error);
      }
    } else {
      alert('Metamask not detected!');
    }
  };

  const payFeeAndCreateBusiness = async () => {
    if (walletAddress) {
      try {
        console.log('Paying fee...');
        setIsFeePaid(true);
        setIsBusinessCreated(true);
      } catch (error) {
        console.error('Fee payment failed:', error);
      }
    }
  };

  const goToDashboard = () => {
    navigate(`/dashboardbusiness`); // Redirect to the customer dashboard
  };

  return (
    <div className="w-[30%] mx-auto bg-zinc-950 shadow-3xl shadow-orange-400 rounded-2xl p-6 min-h-[500px] flex flex-col justify-between">
      <h2 className="text-2xl font-bold mb-4">Business Registration</h2>

      {/* Input Fields */}
      <div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Business Name</label>
          <input
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="Enter business name"
            
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Business Type</label>
          <select
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="">Select type</option>
            <option value="Sole Proprietorship">Sole Proprietorship</option>
            <option value="Partnership">Service</option>
            <option value="Corporation">Corporation</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Business Email</label>
          <input
            type="email"
            value={businessEmail}
            onChange={(e) => setBusinessEmail(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="Enter business email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Registration Number</label>
          <input
            type="number"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="Enter registration number"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Business Description</label>
          <input
            type="textarea"
            value={businessDescription}
            onChange={(e) => setBusinessDescription(e.target.value)}
            className="w-full border rounded  p-2"
            placeholder="Enter business Description"
          />
        </div>

      </div>

      {/* Actions Section */}
      <div>
        {!walletAddress ? (
          <button
            onClick={connectWallet}
            className="w-full bg-orange-400 text-black py-2 px-4 rounded hover:bg-orange-500"
          >
            Connect Metamask Wallet
          </button>
        ) : !isFeePaid ? (
          <button
            onClick={payFeeAndCreateBusiness}
            className="w-full bg-green-500 text-black py-2 px-4 rounded hover:bg-green-600"
          >
            Pay Fee & Create Business
          </button>
        ) : (
          <button
            onClick={goToDashboard}
            className="w-full bg-zinc-950 text-white py-2 px-4 rounded border-2 border-orange-400"
          >
            Go to Business Dashboard
          </button>
        )}
      </div>
    </div>
  );
};

export default BusinessCard;
