import React from 'react';
import { Bar } from 'react-chartjs-2';
import Sidebar from '../Sidebar'; // Ensure the path is correct

const MonthlySales = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000],
        backgroundColor: '#36A2EB',
      },
    ],
  };

  return (
    <div className="flex">
      {/* Fixed sidebar */}
      <div className="fixed top-0 left-0 h-full w-64 bg-gray-800">
        <Sidebar />
      </div>
      {/* Main content */}
      <div className="ml-64 p-6 flex-1">
        <h2 className="text-2xl font-bold mb-4">Monthly Sales</h2>
        <div className="h-96 bg-white p-4 rounded-md shadow-md">
          <Bar data={data} />
        </div>
      </div>
    </div>
  );
};

export default MonthlySales;
