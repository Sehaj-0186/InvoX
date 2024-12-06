import React, { useState } from 'react';

interface Subscription {
  companyName: string;
  paymentDueDate: string;
  paymentStatus: string;
  amount: string;
}

const Subscriptions: React.FC = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([
    {
      companyName: 'Tech Innovators',
      paymentDueDate: '2024-12-15',
      paymentStatus: 'Pending',
      amount: '$200',
    },
    {
      companyName: 'Green Earth Goods',
      paymentDueDate: '2024-12-10',
      paymentStatus: 'Paid',
      amount: '$150',
    },
    {
      companyName: 'Service Pros',
      paymentDueDate: '2024-12-20',
      paymentStatus: 'Pending',
      amount: '$300',
    },
    {
        companyName: 'Tech Innovators',
        paymentDueDate: '2024-12-15',
        paymentStatus: 'Pending',
        amount: '$200',
      },
      {
        companyName: 'Green Earth Goods',
        paymentDueDate: '2024-12-10',
        paymentStatus: 'Paid',
        amount: '$150',
      },
      {
        companyName: 'Service Pros',
        paymentDueDate: '2024-12-20',
        paymentStatus: 'Pending',
        amount: '$300',
      },
      {
        companyName: 'Tech Innovators',
        paymentDueDate: '2024-12-15',
        paymentStatus: 'Pending',
        amount: '$200',
      },
      {
        companyName: 'Green Earth Goods',
        paymentDueDate: '2024-12-10',
        paymentStatus: 'Paid',
        amount: '$150',
      },
      {
        companyName: 'Service Pros',
        paymentDueDate: '2024-12-20',
        paymentStatus: 'Pending',
        amount: '$300',
      },
      {
        companyName: 'Tech Innovators',
        paymentDueDate: '2024-12-15',
        paymentStatus: 'Pending',
        amount: '$200',
      },
      {
        companyName: 'Green Earth Goods',
        paymentDueDate: '2024-12-10',
        paymentStatus: 'Paid',
        amount: '$150',
      },
      {
        companyName: 'Service Pros',
        paymentDueDate: '2024-12-20',
        paymentStatus: 'Pending',
        amount: '$300',
      },
      {
        companyName: 'Tech Innovators',
        paymentDueDate: '2024-12-15',
        paymentStatus: 'Pending',
        amount: '$200',
      },
      {
        companyName: 'Green Earth Goods',
        paymentDueDate: '2024-12-10',
        paymentStatus: 'Paid',
        amount: '$150',
      },
      {
        companyName: 'Service Pros',
        paymentDueDate: '2024-12-20',
        paymentStatus: 'Pending',
        amount: '$300',
      },
    // Add more subscriptions here for testing scroll functionality
  ]);

  return (
    <>
      <div className="w-[90%] mx-auto mb-60">
        <div className="mb-20 text-center text-5xl tracking-tighter text-zinc-300">
          Manage Subscriptions
        </div>

        <div className="container w-[90%] h-[40rem] bg-zinc-950 mt-5 border-y-2 border-orange-400 mx-auto rounded-3xl overflow-y-auto p-6">
          <table className="w-full text-left text-zinc-300">
            <thead className="sticky -top-6  bg-zinc-950">
              <tr>
                <th className="px-4 py-2 border-b border-orange-400">Company Name</th>
                <th className="px-4 py-2 border-b border-orange-400">Payment Due Date</th>
                <th className="px-4 py-2 border-b border-orange-400">Payment Status</th>
                <th className="px-4 py-2 border-b border-orange-400">Amount</th>
                <th className="px-4 py-2 border-b border-orange-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {subscriptions.map((subscription, index) => (
                <tr key={index} className="hover:bg-zinc-800">
                  <td className="px-4 py-2 border-b border-gray-700">
                    {subscription.companyName}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-700">
                    {subscription.paymentDueDate}
                  </td>
                  <td
                    className={`px-4 py-2 border-b border-gray-700 ${
                      subscription.paymentStatus === 'Paid'
                        ? 'text-green-400'
                        : 'text-red-400'
                    }`}
                  >
                    {subscription.paymentStatus}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-700">
                    {subscription.amount}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-700">
                    <button className="bg-orange-400 text-white py-1 px-3 rounded hover:bg-orange-500">
                      {subscription.paymentStatus === 'Paid' ? 'View' : 'Pay'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Subscriptions;
