import React, { useState } from 'react';

const Distributors = () => {
  const [distributors, setDistributors] = useState([
    { id: 1, name: 'Distributor A', region: 'North', orders: 12 },
    { id: 2, name: 'Distributor B', region: 'South', orders: 5 },
    // Add more dummy data as needed
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Distributors</h2>
      <table className="min-w-full bg-white rounded-md shadow-md">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Region</th>
            <th className="py-2 px-4 border">Orders</th>
          </tr>
        </thead>
        <tbody>
          {distributors.map((distributor) => (
            <tr key={distributor.id}>
              <td className="py-2 px-4 border">{distributor.name}</td>
              <td className="py-2 px-4 border">{distributor.region}</td>
              <td className="py-2 px-4 border">{distributor.orders}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
        Add New Distributor
      </button>
    </div>
  );
};

export default Distributors;
