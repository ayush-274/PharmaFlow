import React, { useState } from 'react';

const Transactions = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2024-09-01', distributor: 'Distributor A', total: 5000 },
    { id: 2, date: '2024-09-02', distributor: 'Distributor B', total: 3000 },
    // Add more transaction data
  ]);

  return (
    <div className="p-6">
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
  );
};

export default Transactions;
