import React, { useState } from 'react';
import Sidebar from '../Sidebar'; // Ensure the path is correct

const Transactions = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2024-09-01', distributor: 'Distributor A', total: 5000 },
    { id: 2, date: '2024-09-02', distributor: 'Distributor B', total: 3000 },
    // Add more transaction data as needed
  ]);

  return (
    <div className="flex">
      {/* Fixed sidebar */}
      <div className="fixed top-0 left-0 h-full w-64 bg-gray-800">
        <Sidebar />
      </div>
      {/* Main content */}
      <div className="ml-64 p-6 flex-1">
        <h2 className="text-2xl font-bold mb-4">Recent Transactions</h2>
        <table className="min-w-full bg-white rounded-md shadow-md">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Date</th>
              <th className="py-2 px-4 border">Distributor</th>
              <th className="py-2 px-4 border">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="py-2 px-4 border">{transaction.date}</td>
                <td className="py-2 px-4 border">{transaction.distributor}</td>
                <td className="py-2 px-4 border">${transaction.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
