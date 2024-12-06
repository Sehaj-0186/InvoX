

import React, { useState } from 'react';

interface Business {
  name: string;
  type: string;
  registrationNumber: string;
  description: string;
}

const Explore: React.FC = () => {
  const [businesses, setBusinesses] = useState<Business[]>([
    {
      name: 'Tech Innovators',
      type: 'Corporation',
      registrationNumber: '123456',
      description: 'Innovating the future of technology.',
    },
    {
      name: 'Green Earth Goods',
      type: 'Sole Proprietorship',
      registrationNumber: '789012',
      description: 'Eco-friendly products for a sustainable planet.',
    },
    {
      name: 'Service Pros',
      type: 'Partnership',
      registrationNumber: '345678',
      description: 'Professional services tailored to your needs.',
    },
    {
        name: 'Tech Innovators',
        type: 'Corporation',
        registrationNumber: '123456',
        description: 'Innovating the future of technology.',
      },
      {
        name: 'Green Earth Goods',
        type: 'Sole Proprietorship',
        registrationNumber: '789012',
        description: 'Eco-friendly products for a sustainable planet.',
      },
      {
        name: 'Service Pros',
        type: 'Partnership',
        registrationNumber: '345678',
        description: 'Professional services tailored to your needs.',
      },
      {
        name: 'Tech Innovators',
        type: 'Corporation',
        registrationNumber: '123456',
        description: 'Innovating the future of technology.',
      },
      {
        name: 'Green Earth Goods',
        type: 'Sole Proprietorship',
        registrationNumber: '789012',
        description: 'Eco-friendly products for a sustainable planet.',
      },
      {
        name: 'Service Pros',
        type: 'Partnership',
        registrationNumber: '345678',
        description: 'Professional services tailored to your needs.',
      },
     
  ]);

  return (
    <>
    <div className='mb-20 pb-60 border-b-[1px] border-orange-400 w-[90%] mx-auto'>
    <div className='mt-20 mb-20 text-center text-5xl tracking-tighter'>Explore Businesses</div>
    <div className="container w-[90%] h-[40rem] bg-zinc-950 mt-5 border-y-2 border-orange-400 mx-auto rounded-3xl overflow-y-auto p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
    style={{
        scrollbarWidth: 'none', /* Firefox */
        msOverflowStyle: 'none', /* Internet Explorer 10+ */
      }}>
      {businesses.map((business, index) => (
        <div
          key={index}
          className="bg-zinc-950 shadow-lg rounded-xl p-5 flex flex-col justify-between h-[20rem] border-[0.1px] border-zinc-600 hover:border-orange-400 transition-all 1000ms"
        >
            <div>
          <h3 className="text-3xl font-bold text-zinc-300 pt-6">{business.name}</h3>
          <p className="text-lg text-gray-200 pt-4"><span className='text-orange-400'>Type:</span> {business.type}</p>
          <p className="text-lg text-gray-200 pt-2">
            Registration Number: {business.registrationNumber}
          </p>
          <p className=" text-gray-400 line-clamp-3 pt-4">{business.description}</p>
          </div>
          <button className=" bg-orange-400 w-[90%] mx-auto text-white py-2 px-4 rounded hover:bg-orange-500">
            View Offers
          </button>
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default Explore;
