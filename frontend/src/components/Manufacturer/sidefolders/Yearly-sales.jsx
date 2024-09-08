import React from 'react';
import { Bar } from 'react-chartjs-2';
import Sidebar from '../Sidebar'; // Ensure the path is correct

const YearlySales = () => {
  const data = {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Yearly Sales',
        data: [100000, 120000, 150000, 180000, 200000],
        backgroundColor: '#FF6384',
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
        <h2 className="text-2xl font-bold mb-4">Yearly Sales</h2>
        <div className="h-96 bg-white p-4 rounded-md shadow-md">
          <Bar data={data} />
        </div>
      </div>
    </div>
  );
};

export default YearlySales;
