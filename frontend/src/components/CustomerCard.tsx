import React, { useState } from 'react';
import Web3 from 'web3';
import { useNavigate } from 'react-router-dom';

const CustomerCard: React.FC = () => {
  const [customerName, setCustomerName] = useState('');
  const [customerAge, setCustomerAge] = useState('');
  const [customerCountry, setCustomerCountry] = useState('');
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

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

  const isFormCompleted = () => {
    return customerName && customerAge && customerCountry;
  };

  const goToDashboard = () => {
    navigate('/dashboard'); // Redirect to the customer dashboard
  };

  return (
    <div className="w-[30%] bg-zinc-950 mx-auto shadow-3xl shadow-orange-400 rounded-2xl p-6 min-h-[400px] flex flex-col justify-between">
      <h2 className="text-2xl font-bold mb-4">Customer Details</h2>

      {/* Input Fields */}
      <div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Age</label>
          <input
            type="number"
            value={customerAge}
            onChange={(e) => setCustomerAge(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="Enter your age"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Country</label>
          <input
            type="text"
            value={customerCountry}
            onChange={(e) => setCustomerCountry(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="Enter your country"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div>
        {walletAddress ? (
          <button
            className="w-full bg-zinc-950 border-2 border-orange-400 text-white py-2 px-4 rounded"
            onClick={goToDashboard}          >
            Go to Customer Dashboard
          </button>
        ) : (
          <button
            onClick={connectWallet}
            disabled={!isFormCompleted()}
            className={`w-full py-2 px-4 rounded ${
              isFormCompleted()
                ? 'bg-orange-400 text-white hover:bg-orange-500'
                : 'bg-orange-400 text-white cursor-not-allowed'
            }`}
          >
            Connect Metamask Wallet
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomerCard;
